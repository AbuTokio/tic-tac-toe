import { CellValue } from "@/lib/game"

interface Props {
  value: CellValue
}

// X uses the warm brand gradient, O the cobalt blue — avior's two signature colors.
export default function Glyph({ value }: Props) {
  if (!value) return null
  if (value === "X") {
    return (
      <span className="bg-linear-to-br from-brand-pink to-brand-orange bg-clip-text font-display text-5xl font-bold text-transparent">
        X
      </span>
    )
  }
  return <span className="font-display text-5xl font-bold text-primary">O</span>
}
