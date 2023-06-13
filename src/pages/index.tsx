import Head from 'next/head'
import Image from 'next/image'

import { HomeContainer, SectionHomeHero } from '@/styles/pages/home'

import HomeImage from '../../public/images/avatar.svg'
import { SubscribeButton } from '@/components/SubscribeButton'
import { GetServerSideProps } from 'next'

export default function Home() {
  return (
    <>
      <Head>Início | ig.news</Head>

      <HomeContainer>
        <SectionHomeHero>
          <span>👏 Ei, desenvolvedor</span>

          <h1>
            Notícias sobre o Mundo do <span>React.</span>
          </h1>

          <p>
            Tenha acesso a todas as publicações <br />
            <span>por R$9,90 mês</span>
          </p>

          <SubscribeButton />
        </SectionHomeHero>

        <Image src={HomeImage} alt="Girl coding" />
      </HomeContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {}
  }
}
