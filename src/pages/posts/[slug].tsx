import { GetServerSideProps } from 'next'
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]'
import { createClient } from '../../../prismicio'
import { RichText } from 'prismic-dom'
import Head from 'next/head'
import {
  PostContainer,
  PostContent,
  RenderingDivContent,
} from '@/styles/pages/post'

type PostProps = {
  post: {
    slug: string
    title: string
    content: string
    updatedAt: string
  }
}

export default function Post({ post }: PostProps) {
  return (
    <>
      <Head>
        <title>{post.title} | Ignews</title>
      </Head>

      <PostContainer>
        <PostContent>
          <h1>{post.title}</h1>
          <time>{post.updatedAt}</time>

          <RenderingDivContent
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </PostContent>
      </PostContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = (await getServerSession(
    context.req,
    context.res,
    authOptions,
  )) as any

  if (!session?.activeSubscription) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const prismic = createClient()
  const response = await prismic.getByUID(
    'publication',
    String(context?.params?.slug),
    {},
  )

  const post = {
    slug: context?.params?.slug,
    title: response.data.title,
    content: RichText.asHtml(response.data.content),
    updatedAt: new Date(response.last_publication_date).toLocaleDateString(
      'pt-BR',
      {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      },
    ),
  }

  return {
    props: {
      post,
    },
  }
}
