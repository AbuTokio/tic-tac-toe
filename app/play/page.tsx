"use client"
import { useState } from "react"
import GameView from "@/components/game/GameView"
import Button from "@/components/ui/Button"
import Input from "@/components/ui/Input"
import Card from "@/components/ui/Card"
import GradientHeading from "@/components/ui/GradientHeading"
import type { SeatedPlayers } from "@/lib/game"

export default function PlayPage() {
  const [players, setPlayers] = useState<SeatedPlayers | null>(null)
  const [playerNames, setPlayerNames] = useState<{ X: string, O: string, }>({ X: "", O: ""})
  

  function start() {
    if (!playerNames.X.trim() || !playerNames.O.trim()) return
    // Local play: dummy ids for now, real DB ids later
    setPlayers({
      X: { id: crypto.randomUUID(), displayName: playerNames.X.trim(), mark: "X" },
      O: { id: crypto.randomUUID(), displayName: playerNames.O.trim(), mark: "O" },
    })
  }

  if (players) {
    return (
      <main className="space-y-6">
        <GameView players={players} onEnd={() => setPlayers(null)} />
      </main>
    )
  }

  return (
    <main className="mx-auto max-w-md">
      <GradientHeading as="h1" className="my-8 text-center text-4xl">
        Who's playing?
      </GradientHeading>
      <Card>
        <div className="space-y-4">
          <Input label="Player 1 (X)" value={playerNames.X} onChange={(e) => setPlayerNames({ ...playerNames, X: e.target.value })} />
          <Input label="Player 2 (O)" value={playerNames.O} onChange={(e) => setPlayerNames({ ...playerNames, O: e.target.value })} />
          <Button onClick={start} disabled={!playerNames.X.trim() || !playerNames.O.trim()} className="w-full">
            Start game
          </Button>
        </div>
      </Card>
    </main>
  )
}
