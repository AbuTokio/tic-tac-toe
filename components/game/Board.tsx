import type { Board as BoardType } from "@/lib/game"
import Cell from "@/components/game/Cell"

interface Props {
  board: BoardType
  winningLine: number[] | null
  disabled: boolean
  onCellClick: (position: number) => void
}

export default function Board({ board, winningLine, disabled, onCellClick }: Props) {
  return (
    <div className="grid grid-cols-3 gap-3">
      {board.map((value, index) => (
        <Cell
          key={index}
          value={value}
          isWinning={winningLine?.includes(index) ?? false}
          disabled={disabled}
          onClick={() => onCellClick(index)}
        />
      ))}
    </div>
  )
}
