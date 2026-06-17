import { applyMove, createEmptyBoard, isValidMove } from "@/lib/game/board"
import { Board, GameStatus, Mark, SeatedPlayer } from "@/lib/game/types"
import { getActivePlayer, getStatus } from "@/lib/game/rules"

export interface GameState {
  board: Board
  startingMark: Mark
  activePlayer: Mark
  status: GameStatus
  players: {
    X: SeatedPlayer
    O: SeatedPlayer
  }
  scores: {
    X: number
    O: number
    draws: number
  }
}

// actions that can be dispatched to update the game state
export type GameAction =
  | {
      type: "PLACE_MARK"
      index: number
    }
  | {
      type: "REMATCH"
      startingMark: Mark
    }

// initial game state with an empty board, default players, and scores set to 0
export function createInitialGameState(players: { X: SeatedPlayer; O: SeatedPlayer }, startingMark: Mark): GameState {
  const board = createEmptyBoard()
  const activePlayer = getActivePlayer(board, startingMark)
  const status = getStatus(board)
  const scores = {
    X: 0,
    O: 0,
    draws: 0,
  }

  return {
    board,
    startingMark,
    activePlayer,
    status,
    players,
    scores,
  }
}

export function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case "PLACE_MARK": {
      // ignore action if game is already over or move is invalid
      if (state.status.state !== "in_progress") return state
      if (!isValidMove(state.board, action.index)) return state

      // apply the move to get the new board state
      const board = applyMove(state.board, action.index, state.activePlayer)
      const status = getStatus(board)
      const activePlayer = getActivePlayer(board, state.startingMark)

      // update scores if the game has been won or drawn
      const scores = { ...state.scores }

      if (status.state === "won") {
        scores[status.winner as Mark] += 1
      } else if (status.state === "draw") {
        scores.draws += 1
      }

      return {
        ...state,
        board,
        activePlayer,
        status,
        scores,
      }
    }
    case "REMATCH": {
      // reset the board and status for a new game, but keep the same players and scores
      const board = createEmptyBoard()
      const startingMark = action.startingMark
      const activePlayer = getActivePlayer(board, startingMark)
      const status = getStatus(board)

      return {
        ...state,
        board,
        startingMark,
        activePlayer,
        status,
      }
    }
    default:
      return state
  }
}
