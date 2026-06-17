import { describe, it, expect } from "vitest"
import { getStatus, getActivePlayer } from "@/lib/game/rules"
import type { Board } from "@/lib/game/types"

// helper to create a board from a string representation, e.g. "X.O...X.."
const board = (str: string): Board => {
  return str.split("").map((c) => {
    return c === "X" ? "X" : c === "O" ? "O" : null
  })
}

describe("getStatus", () => {
  it("detects a row win", () => {
    expect(getStatus(board("XXX......"))).toEqual({
      state: "won",
      winner: "X",
      winningLine: [0, 1, 2],
    })
  })
  it("detects a column win", () => {
    expect(getStatus(board("O..O..O..")).winner).toBe("O")
  })
  it("detects a diagonal win", () => {
    expect(getStatus(board("X...X...X")).winningLine).toEqual([0, 4, 8])
  })
  it("detects a draw on a full board with no winner", () => {
    expect(getStatus(board("XXOOOXXXO")).state).toBe("draw")
  })
  it("reports in_progress otherwise", () => {
    expect(getStatus(board("X........")).state).toBe("in_progress")
  })
})

describe("getActivePlayer", () => {
  it("returns the starting mark on an empty board", () => {
    expect(getActivePlayer(board("........."), "O")).toBe("O")
  })
  it("alternates after each placed mark", () => {
    expect(getActivePlayer(board("X........"), "X")).toBe("O")
  })
})
