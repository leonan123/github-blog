import Markdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import remarkGfm from 'remark-gfm'

interface PostContentProps {
  content: string
}

export function PostContent({ content }: PostContentProps) {
  return (
    <section className="mx-7 md:container md:mx-auto">
      <article className="px-8 py-10">
        <Markdown
          className="prose prose-amber text-gray-300 prose-headings:text-gray-300 prose-li:m-0"
          components={{
            code({ className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '')
              return match ? (
                <SyntaxHighlighter
                  {...props}
                  style={atomDark}
                  language={match[1]}
                  PreTag="div"
                  ref={(instance: SyntaxHighlighter | null) => instance}
                  showLineNumbers
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              )
            },
          }}
          remarkPlugins={[[remarkGfm]]}
        >
          {content}
        </Markdown>
      </article>
    </section>
  )
}
