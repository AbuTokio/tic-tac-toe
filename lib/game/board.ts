import type { Board, Mark } from "@/lib/game/types"

export function createEmptyBoard(): Board {
  return Array(9).fill(null)
}

export function isValidMove(board: Board, index: number): boolean {
  return index >= 0 && index < 9 && board[index] === null // valid index and cell is empty
}

// returns a new board with the move applied, does not mutate the original
export function applyMove(board: Board, index: number, mark: Mark): Board {
  const updatedBoard = [...board]
  updatedBoard[index] = mark
  return updatedBoard
}

export function isBoardFull(board: Board): boolean {
  return board.every((cell) => cell !== null)
}
