import type { CellValue } from "@/lib/game"
import Glyph from "@/components/game/Glyph"

interface Props {
  value: CellValue
  isWinning: boolean
  disabled: boolean
  onClick: () => void
}

export default function Cell({ value, isWinning, disabled, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      disabled={disabled || value !== null}
      className={`flex aspect-square items-center justify-center rounded-xl border transition ${
        isWinning ? "border-success/60 bg-success/10" : "border-white/10 bg-white/3"
      } ${value === null && !disabled ? "hover:border-primary/50 hover:bg-primary/5 cursor-pointer" : ""}`}>
      <Glyph value={value} />
    </button>
  )
}
