import { PostListContainer, PostsContainer } from '@/styles/pages/posts'
import Head from 'next/head'
import Link from 'next/link'

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <PostsContainer>
        <PostListContainer>
          <Link href="/">
            <time>18 de junho de 2023</time>
            <strong>
              As principais lições e dicas compiladas para quem está começando
            </strong>
            <p>
              Hoje devs são peças fundamentais de todo negócio, estão nas
              startups e nas pequenas e médias empresas que buscam soluções
              tecnológicas para seus produtos e serviços.
            </p>
          </Link>

          <Link href="/">
            <time>18 de junho de 2023</time>
            <strong>
              As principais lições e dicas compiladas para quem está começando
            </strong>
            <p>
              Hoje devs são peças fundamentais de todo negócio, estão nas
              startups e nas pequenas e médias empresas que buscam soluções
              tecnológicas para seus produtos e serviços.
            </p>
          </Link>

          <Link href="/">
            <time>18 de junho de 2023</time>
            <strong>
              As principais lições e dicas compiladas para quem está começando
            </strong>
            <p>
              Hoje devs são peças fundamentais de todo negócio, estão nas
              startups e nas pequenas e médias empresas que buscam soluções
              tecnológicas para seus produtos e serviços.
            </p>
          </Link>
        </PostListContainer>
      </PostsContainer>
    </>
  )
}
