import { useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import { PostContent } from './components/PostContent'
import { PostInfo } from './components/PostInfo'
import { useParams } from 'react-router-dom'
import { api } from '@/lib/axios'

export interface PostType {
  title: string
  content: string
  userName: string
  createdAt: string
  commentsCount: string
  htmlUrl: string
}

export function Post() {
  const { postNumber } = useParams()
  const [post, setPost] = useState<PostType | null>(null)

  useEffect(() => {
    ;(async () => {
      const response = await api.get(
        `/repos/leonan123/github-blog/issues/${postNumber}`,
      )

      const {
        title,
        body: content,
        user: { login: userName },
        created_at: createdAt,
        comments: commentsCount,
        html_url: htmlUrl,
      } = response.data

      setPost({
        title,
        content,
        userName,
        createdAt,
        commentsCount,
        htmlUrl,
      })
    })()
  }, [postNumber])

  return (
    <>
      <Header />

      {post && (
        <main className="min-h-[calc(100%-12.9rem)] w-full space-y-16 pb-8">
          <PostInfo post={post} />
          <PostContent content={post.content} />
        </main>
      )}
    </>
  )
}
