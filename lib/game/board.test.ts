import { describe, it, expect } from "vitest"
import { createEmptyBoard, isValidMove, applyMove, isBoardFull } from "@/lib/game/board"

describe("board", () => {
  it("creates an empty board of 9 null cells", () => {
    expect(createEmptyBoard()).toEqual(Array(9).fill(null))
  })

  it("allows a move on an empty cell only", () => {
    const board = createEmptyBoard()
    // valid move on empty cell
    expect(isValidMove(board, 0)).toBe(true)
    // invalid move on occupied cell
    expect(isValidMove(applyMove(board, 0, "X"), 0)).toBe(false)
    // invalid move on out-of-bounds index
    expect(isValidMove(board, 9)).toBe(false)
    // invalid move on negative index
    expect(isValidMove(board, -1)).toBe(false)
  })

  it("applyMove returns a new board and does not mutate the original", () => {
    const board = createEmptyBoard()
    const updatedBoard = applyMove(board, 4, "X")
    expect(updatedBoard[4]).toBe("X")
    expect(board[4]).toBe(null)
  })

  it("detects a full board", () => {
    expect(isBoardFull(Array(9).fill("X"))).toBe(true)
    expect(isBoardFull(createEmptyBoard())).toBe(false)
  })
})
