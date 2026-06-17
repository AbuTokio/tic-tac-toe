import { createElement } from "react"

interface Props {
  as?: "h1" | "h2" | "h3"
  className?: string
  children: React.ReactNode
}

export default function GradientHeading({ as = "h1", className = "", children }: Props) {
  return createElement(
    as,
    {
      className: `bg-gradient-to-r from-brand-pink via-brand-orange to-brand-lavender bg-clip-text font-display font-bold tracking-tight text-transparent ${className}`,
    },
    children,
  )
}
