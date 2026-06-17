import type { ButtonHTMLAttributes } from "react"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost"
}

export default function Button({ variant = "primary", className = "", ...props }: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-medium transition disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer"
  const styles =
    variant === "primary"
      ? "bg-primary text-white hover:bg-primary-hover"
      : "border border-white/10 bg-white/5 text-ink hover:bg-white/10"
  return <button className={`${base} ${styles} ${className}`} {...props} />
}
