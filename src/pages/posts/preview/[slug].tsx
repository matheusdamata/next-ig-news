import { useEffect } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useSession } from 'next-auth/react'

import { createClient } from '../../../../prismicio'
import { RichText } from 'prismic-dom'

import {
  PostContainer,
  PostContent,
  PostContinueReadingContainer,
  RenderingDivContent,
} from '@/styles/pages/post'
import { useRouter } from 'next/router'

type PostPreviewProps = {
  post: {
    slug: string
    title: string
    content: string
    updatedAt: string
  }
}

export default function PostPreview({ post }: PostPreviewProps) {
  const { data } = useSession() as any
  const router = useRouter()

  useEffect(() => {
    if (data?.activeSubscription) {
      router.push(`/posts/${post.slug}`)
    }
  }, [post.slug, router, data])

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
            preview={true}
          />

          <PostContinueReadingContainer>
            Quer continuar lendo?
            <Link href="/">Se inscreva agora 🥳</Link>
          </PostContinueReadingContainer>
        </PostContent>
      </PostContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const prismic = createClient()

  const response = await prismic.getByUID(
    'publication',
    String(context?.params?.slug),
    {},
  )

  const post = {
    slug: context?.params?.slug,
    title: response.data.title,
    content: RichText.asHtml(response.data.content.slice(0, 3)),
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
    revalidate: 60 * 30, // 30 minutes
  }
}
