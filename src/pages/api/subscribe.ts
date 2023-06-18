import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next"
import { stripe } from "@/services/stripe";
import { authOptions } from "./auth/[...nextauth]";
import { query as q } from 'faunadb'
import { fauna } from "@/services/fauna";

type User = {
  ref: {
    id: string
  },
  data: {
    stripe_customer_id: string
  }
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({
      error: 'Method not allowed',
    })
  }

  const session = await getServerSession(req, res, authOptions)

  const user = await fauna.query<User>(
    q.Get(
      q.Match(
        q.Index('user_by_email'),
        q.Casefold(session?.user?.email as any)
      )
    )
  )

  let customerId = user.data.stripe_customer_id

  if (!customerId) {
    const stripeCustomer = await stripe.customers.create({
      email: session?.user?.email as any,
    })

    await fauna.query(
      q.Update(
        q.Ref(q.Collection('users'), user.ref.id), {
          data: {
            stripe_customer_id: stripeCustomer.id
          }
        }
      )
    )

    customerId = stripeCustomer.id
  }

  const stripeCheckoutSession = await stripe.checkout.sessions.create({
    customer: customerId,
    payment_method_types: ['card'],
    billing_address_collection: 'required',
    line_items: [
      {
        price: 'price_1NINvJALTrFKDx9IUC5603u0',
        quantity: 1
      }
    ],
    mode: 'subscription',
    allow_promotion_codes: true,
    success_url: process.env.STRIPE_SUCCESS_URL as any,
    cancel_url: process.env.STRIPE_CANCEL_URL
  })

  return res.status(200).json({
    sessionId: stripeCheckoutSession.id
  })
}