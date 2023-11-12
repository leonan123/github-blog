import { useEffect, useState } from 'react'
import { Card } from './Card'
import { SearchForm } from './SearchForm'
import { api } from '@/lib/axios'

export interface PostType {
  id: number
  number: number
  createdAt: string
  title: string
  content: string
}

export function Publications() {
  const [error, setError] = useState(false)
  const [posts, setPosts] = useState<PostType[]>([] as PostType[])

  function onSearchFormSubmit(query: string) {
    fetchPosts(`${query} repo:leonan123/github-blog`)
  }

  async function fetchPosts(query: string) {
    try {
      const response = await api.get('/search/issues', {
        params: {
          q: query,
        },
      })

      const data = response.data

      setPosts(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        data.items.map((post: any) => {
          return {
            id: post.id,
            number: post.number,
            createdAt: post.created_at,
            title: post.title,
            content: post.body,
          }
        }),
      )

      setError(false)
    } catch (error) {
      setError(true)
    }
  }

  useEffect(() => {
    fetchPosts('repo:leonan123/github-blog')
  }, [])

  return (
    <section className="mx-7 md:container md:mx-auto">
      <header>
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-gray-200">Publicações</h3>
          <span className="text-sm text-cyan-100">6 publicações</span>
        </div>
        <SearchForm onSearchFormSubmit={onSearchFormSubmit} />
      </header>

      <main>
        {posts ? (
          <ul className="mt-12 flex flex-col gap-8 sm:grid sm:grid-cols-2">
            {posts.map((post) => (
              <Card key={post.id} {...post} />
            ))}
          </ul>
        ) : (
          <p className="w-full text-center text-lg text-gray-300">
            Carregando...
          </p>
        )}

        {error && (
          <div className="flex flex-col items-center justify-center gap-3">
            <p className="text-lg text-gray-300">
              Aguarde 1 minuto e tente novamente...
            </p>

            <button
              className="border-text-gray-300 rounded-lg border px-4 py-2 text-gray-300 hover:bg-gray-300/10"
              onClick={() => fetchPosts('repo:leonan123/github-blog')}
            >
              Tentar novamente
            </button>
          </div>
        )}
      </main>
    </section>
  )
}
