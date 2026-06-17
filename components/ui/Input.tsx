import type { InputHTMLAttributes } from "react"

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
}

export default function Input({ label, error, className = "", ...props }: Props) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm text-muted">{label}</span>
      <input
        className={`w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-ink placeholder:text-muted/60 outline-none focus:border-primary ${className}`}
        {...props}
      />
      {error ? <span className="mt-1 block text-sm text-brand-pink">{error}</span> : null}
    </label>
  )
}
