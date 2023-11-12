import { Link } from 'react-router-dom'
import { PostType } from './Publications'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import Markdown from 'react-markdown'

export function Card(post: PostType) {
  return (
    <li className="rounded-md bg-cyan-600 p-8 transition-colors focus-within:ring-1 focus-within:ring-blue-100 hover:ring-1 hover:ring-blue-100">
      <Link to={`/post/${post.number}`} className="outline-none focus:border-0">
        <div className="flex flex-wrap-reverse gap-4">
          <h4 className="flex-1 text-xl font-bold text-gray-100">
            {post.title}
          </h4>
          <span className="pt-1 text-sm text-cyan-100">
            {formatDistanceToNow(new Date(post.createdAt), {
              addSuffix: true,
              locale: ptBR,
            })}
          </span>
        </div>

        <Markdown className="leading mt-5 line-clamp-4 text-ellipsis text-gray-300">
          {post.content}
        </Markdown>
      </Link>
    </li>
  )
}
