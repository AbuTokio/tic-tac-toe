import type { GameStatus, SeatedPlayer } from "@/lib/game"
import Button from "@/components/ui/Button"
import GradientHeading from "@/components/ui/GradientHeading"

interface Props {
  status: GameStatus
  players: { X: SeatedPlayer; O: SeatedPlayer }
  onRematch: () => void
  onEnd: () => void
}

export default function ResultDisplay({ status, players, onRematch, onEnd }: Props) {
  const title = status.state === "won" ? `${players[status.winner!].displayName} wins!` : "It's a draw!"

  return (
    <div className="flex flex-col items-center gap-6">
      <GradientHeading as="h2" className="text-4xl">
        {title}
      </GradientHeading>
      <div className="flex gap-3 w-full items-center justify-center">
        <Button className="flex-1" onClick={onRematch}>Rematch</Button>
        <Button className="flex-1" variant="ghost" onClick={onEnd}>
          End  {/* & see stats -> when implemented */}
        </Button>
      </div>
    </div>
  )
}
