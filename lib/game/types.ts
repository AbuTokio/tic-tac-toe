export type Mark = "X" | "O"
export type CellValue = Mark | null
// 9 cells in a 3x3 grid, indexed from 0 to 8
export type Board = CellValue[]

export interface GameStatus {
  state: "in_progress" | "won" | "draw"
  winner: Mark | null
  // indexes of the winning cells, null if no winner yet
  winningLine: number[] | null
}

export interface SeatedPlayer {
  id: string
  displayName: string
  mark: Mark
}

export interface SeatedPlayers {
  X: SeatedPlayer
  O: SeatedPlayer
}
