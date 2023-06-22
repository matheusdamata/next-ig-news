import { useSession, signIn } from 'next-auth/react'
import { SubscribeButtonContainer } from '@/styles/components/subscribeButton'

import { SubscribeButtonProps } from '@/types/globalComponents'
import { api } from '@/services/api'
import { getStripeJs } from '@/services/stripe-js'
import { useRouter } from 'next/router'

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
  const { data: session } = useSession() as any
  const router = useRouter()

  async function handleSubscribe() {
    if (!session) {
      signIn('github')
      return
    }

    if (session.activeSubscription) {
      router.push('/posts')
      return
    }

    try {
      const response = await api.post('/subscribe')

      const { sessionId } = response.data

      const stripe = await getStripeJs()

      await stripe?.redirectToCheckout({
        sessionId,
      })
    } catch (err) {
      alert(err)
    }
  }

  return (
    <SubscribeButtonContainer onClick={handleSubscribe}>
      Inscreva-se agora
    </SubscribeButtonContainer>
  )
}
