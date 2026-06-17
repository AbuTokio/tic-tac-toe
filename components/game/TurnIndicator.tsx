import type { SeatedPlayer } from "@/lib/game"

interface Props {
  activePlayer: SeatedPlayer
}

export default function TurnIndicator({ activePlayer }: Props) {
  return (
    <p className="text-center text-muted">
      <span className="text-ink">{activePlayer.displayName}</span> ({activePlayer.mark}) to move
    </p>
  )
}
