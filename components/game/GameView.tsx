"use client"
import { useGame } from "@/hooks/useGame"
import type { SeatedPlayers } from "@/lib/game"
import Card from "@/components/ui/Card"
import Board from "@/components/game/Board"
import PlayerBadge from "@/components/game/PlayerBadge"
import ResultDisplay from "@/components/game/ResultDisplay"
import TurnIndicator from "@/components/game/TurnIndicator"

interface Props {
  players: SeatedPlayers
  onEnd: () => void
}

export default function GameView({ players, onEnd }: Props) {
  const { state, placeMark, rematch } = useGame(players)
  const finished = state.status.state !== "in_progress"

  return (
    <div className="mx-auto max-w-xl space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <PlayerBadge player={players.X} active={!finished && state.activePlayer === "X"} />
        <PlayerBadge player={players.O} active={!finished && state.activePlayer === "O"} />
      </div>

      {!finished && <TurnIndicator activePlayer={state.players[state.activePlayer]} />}
            {finished && <ResultDisplay status={state.status} players={players} onRematch={rematch} onEnd={onEnd} />}

      <Card>
        <Board board={state.board} winningLine={state.status.winningLine} disabled={finished} onCellClick={placeMark} />
      </Card>



      <p className="text-center text-sm text-muted">
        Session scores - {players.X.displayName}: {state.scores.X} · {players.O.displayName}: {state.scores.O} · Draws: {state.scores.draws}
      </p>
    </div>
  )
}
