import type { SeatedPlayer } from "@/lib/game"

interface Props {
  player: SeatedPlayer
  active: boolean
}

export default function PlayerBadge({ player, active }: Props) {
  const markClass =
    player.mark === "X"
      ? "bg-gradient-to-r from-brand-pink to-brand-orange bg-clip-text text-transparent"
      : "text-primary"
  return (
    <div
      className={`flex items-center gap-3 rounded-2xl border px-4 py-3 transition ${
        active ? "border-primary/50 bg-primary/5" : "border-white/10 bg-white/2"
      }`}>
      <span className={`font-display text-2xl font-bold ${markClass}`}>{player.mark}</span>
      <div>
        <div className="text-ink">{player.displayName}</div>
        {active ? <div className="text-xs text-muted">your turn</div> : null}
      </div>
    </div>
  )
}
