import { Board, GameStatus, Mark } from "@/lib/game/types"
import { isBoardFull } from "@/lib/game/board"

export const WINNING_LINES: number[][] = [
  [0, 1, 2], // rows
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6], // columns
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8], // diagonals
  [2, 4, 6],
]

export function getStatus(board: Board): GameStatus {
  for (const line of WINNING_LINES) {
    const [a, b, c] = line // destructure the line into cell indexes

    // check if the cells in this line are all the same mark
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      // return winning state with the winner and the winning line
      return {
        state: "won",
        winner: board[a],
        winningLine: line,
      }
    }
  }

  // if no winner and board is full, it's a draw
  if (isBoardFull(board)) {
    return {
      state: "draw",
      winner: null,
      winningLine: null,
    }
  }

  // otherwise the game is still in progress
  return {
    state: "in_progress",
    winner: null,
    winningLine: null,
  }
}

// determines whose turn it is based on the current board state and the starting mark
// better to derive this from the board state => only one source of truth, no risk of desync between game state and active player
export function getActivePlayer(board: Board, startingMark: Mark): Mark {
  // count how many marks have been placed to determine whose turn it is
  const placedMarks = board.filter((cell) => {
    return cell !== null
  }).length

  // determine the other Mark
  const otherMark: Mark = startingMark === "X" ? "O" : "X"

  // if placedMarks is even, it's the starting player's turn, otherwise it's the other player's turn
  return placedMarks % 2 === 0 ? startingMark : otherMark
}
