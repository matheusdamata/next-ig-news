import Head from 'next/head'
import Image from 'next/image'
import { GetStaticProps } from 'next'

import { HomeContainer, SectionHomeHero } from '@/styles/pages/home'

import HomeImage from '../../public/images/avatar.svg'
import { SubscribeButton } from '@/components/SubscribeButton'

import { stripe } from '@/services/stripe'

import { HomeProps } from '@/types/global'
import { priceFormatter } from '@/utils/formatter'

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Início | dev.news</title>
      </Head>

      <HomeContainer>
        <SectionHomeHero>
          <span>👏 Ei, desenvolvedor</span>

          <h1>
            Notícias sobre o Mundo do <span>React.</span>
          </h1>

          <p>
            Mantenha o acesso a todas as publicações <br />
            <span>
              por <strong>{priceFormatter.format(product.amount)}</strong> /mês
            </span>
          </p>

          <SubscribeButton priceId={product.priceId} />
        </SectionHomeHero>

        <Image src={HomeImage} alt="Girl coding" />
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1NINvJALTrFKDx9IUC5603u0')

  const product = {
    priceId: price.id,
    amount: price.unit_amount! / 100,
  }

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  }
}
