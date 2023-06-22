import { GetStaticProps } from 'next'
import Link from 'next/link'
import Head from 'next/head'

import { createClient } from '../../../prismicio'

import { PostListContainer, PostsContainer } from '@/styles/pages/posts'

type Post = {
  slug: string
  title: string
  excerpt: string
  updatedAt: string
}

type PostsProps = {
  posts: Post[]
}

export default function Posts({ posts }: PostsProps) {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <PostsContainer>
        <PostListContainer>
          {posts.map((post) => (
            <Link href={`/posts/${post.slug}`} key={post.slug}>
              <time>{post.updatedAt}</time>
              <strong>{post.title}</strong>
              <p>{post.excerpt}</p>
            </Link>
          ))}
        </PostListContainer>
      </PostsContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ previewData }) => {
  const prismic = createClient()

  const response = await prismic.getByType('publication', {
    fetch: ['publication.title', 'publication.content'],
    pageSize: 100,
  })

  const posts = response.results.map((post: any) => {
    return {
      slug: post.uid,
      title: post.data.title,
      excerpt:
        post.data.content.find((content: any) => content.type === 'paragraph')
          ?.text ?? '',
      updatedAt: new Date(post.last_publication_date).toLocaleDateString(
        'pt-BR',
        {
          day: '2-digit',
          month: 'long',
          year: 'numeric',
        },
      ),
    }
  })

  console.log('Res: ', posts)

  return {
    props: {
      posts,
    },
  }
}
