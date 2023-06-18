import Stripe from 'stripe'
import { version as VersionJSON } from '../../package.json'

export const stripe = new Stripe(process.env.STRIPE_API_KEY as string, {
  apiVersion: '2022-11-15',
  appInfo: {
    name: 'Ig News',
    // version: VersionJSON,
  },
})
