"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface Link {
  href: string
  label: string
  soon?: boolean
}

const LINKS: Link[] = [
  { href: "/", label: "Home" },
  { href: "/play", label: "Play" },
  { href: "/leaderboard", label: "Leaderboard", soon: true },
  { href: "/replay", label: "Replay", soon: true },
]

export default function Navbar() {
  const pathname = usePathname()
  return (
    <nav className="sticky top-4 z-10 mx-auto flex w-fit items-center gap-1 rounded-full border border-white/10 bg-surface/70 p-1.5 backdrop-blur">
      {LINKS.map((link) => {
        const active = pathname === link.href || pathname.startsWith(link.href + "/")
        return (
          <Link
            key={link.href}
            href={link.soon ? "#" : link.href}
            className={`relative rounded-full px-4 py-2 text-sm transition ${
              active ? "bg-white/10 text-ink" : "text-muted hover:text-ink"
            } ${link.soon ? "cursor-not-allowed opacity-40" : "hover:bg-white/5"}`}>
            {link.label}
          </Link>
        )
      })}
    </nav>
  )
}
