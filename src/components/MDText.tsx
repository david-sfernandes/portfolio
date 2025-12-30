import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function MDText({ children, className = "" }: { children: string, className?: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        p: ({ children }) => (
          <p className={className}>
            {children}
          </p>
        ),
      }}

    >
      {children}
    </ReactMarkdown>
  )
}
