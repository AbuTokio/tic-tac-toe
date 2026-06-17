interface Props {
  className?: string
  children: React.ReactNode
}

export default function Card({ className = "", children }: Props) {
  return (
    <div
      className={`rounded-2xl border border-white/[0.07] bg-surface/80 p-6 shadow-[0_0_60px_-30px_#3b5bff] ${className}`}>
      {children}
    </div>
  )
}
