import {
  FaChevronLeft,
  FaArrowUpRightFromSquare,
  FaGithub,
  FaCalendarDay,
  FaComment,
} from 'react-icons/fa6'

import { formatDistanceToNow } from 'date-fns'
import { Link } from 'react-router-dom'
import { PostType } from '..'
import { ptBR } from 'date-fns/locale'

interface PostInfoProps {
  post: Omit<PostType, 'content'>
}

export function PostInfo({ post }: PostInfoProps) {
  return (
    <section className="relative z-10 mx-7 -mt-[calc(18.5rem/3.5)] min-h-[168px] rounded-lg bg-cyan-700 p-8 md:container md:mx-auto">
      <div className="flex items-center justify-between text-xs font-bold uppercase text-blue-100">
        <Link to={'/'} className="flex items-center gap-2 hover:text-blue-700">
          <FaChevronLeft className="text-xs" />
          <span>Voltar</span>
        </Link>
        <a
          href={post.htmlUrl}
          className="flex items-center gap-2 hover:text-blue-700"
          target="_blank"
          rel="noreferrer"
        >
          <span>Ver no github</span>
          <FaArrowUpRightFromSquare className="text-xs" />
        </a>
      </div>

      <h1 className="mt-5 text-2xl font-bold text-gray-100">{post.title}</h1>

      <ul className="mt-4 flex flex-wrap items-center gap-8 font-light text-cyan-100 sm:mt-2">
        <li>
          <div className="flex items-center gap-2">
            <FaGithub className="text-lg" />
            <span>{post.userName}</span>
          </div>
        </li>

        <li>
          <div className="flex items-center gap-2">
            <FaCalendarDay className="text-lg" />
            <span>
              {formatDistanceToNow(new Date(post.createdAt), {
                addSuffix: true,
                locale: ptBR,
              })}
            </span>
          </div>
        </li>

        <li>
          <div className="flex items-center gap-2">
            <FaComment className="text-lg" />
            <span>{post.commentsCount} comentários</span>
          </div>
        </li>
      </ul>
    </section>
  )
}
