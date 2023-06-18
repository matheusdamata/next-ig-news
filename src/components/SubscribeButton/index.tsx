import { useSession, signIn } from 'next-auth/react'
import { SubscribeButtonContainer } from '@/styles/components/subscribeButton'

import { SubscribeButtonProps } from '@/types/globalComponents'
import { api } from '@/services/api'
import { getStripeJs } from '@/services/stripe-js'

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
  const { data: session } = useSession()

  async function handleSubscribe() {
    if (!session) {
      signIn('github')
      return
    }
    
    try {
      const response = await api.post('/subscribe')

      const { sessionId } = response.data

      const stripe = await getStripeJs()

      await stripe?.redirectToCheckout({
        sessionId
      })
      
    } catch (err) {
      alert(err)
    }
    
  }

  return <SubscribeButtonContainer onClick={handleSubscribe}>Inscreva-se agora</SubscribeButtonContainer>
}
