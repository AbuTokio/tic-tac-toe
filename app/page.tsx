import Link from "next/link"
import Button from "@/components/ui/Button"
import GradientHeading from "@/components/ui/GradientHeading"

export default function Home() {
  return (
    <main className="mx-auto flex max-w-3xl flex-col items-center justify-center px-6 py-24 text-center">
      <GradientHeading className="text-6xl">Tic-Tac-Toe</GradientHeading>
      <p className="mt-5 max-w-md text-muted">A local two-player game. Take turns and climb the leaderboard.</p>
      <Link href="/play" className="mt-8">
        <Button>Start a game</Button>
      </Link>
    </main>
  )
}
