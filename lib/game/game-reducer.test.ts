import { describe, it, expect } from "vitest"
import { createInitialGameState, gameReducer } from "@/lib/game/game-reducer"
import type { SeatedPlayer } from "@/lib/game/types"

const players = {
  X: { id: crypto.randomUUID(), displayName: "Max", mark: "X" } as SeatedPlayer,
  O: { id: crypto.randomUUID(), displayName: "Ben", mark: "O" } as SeatedPlayer,
}

describe("gameReducer", () => {
  it("places a mark for the active player and switches turns", () => {
    const s0 = createInitialGameState(players, "X")
    const s1 = gameReducer(s0, { type: "PLACE_MARK", index: 0 })
    expect(s1.board[0]).toBe("X")
    expect(s1.activePlayer).toBe("O")
  })

  it("ignores a move on an occupied cell", () => {
    const s0 = createInitialGameState(players, "X")
    const s1 = gameReducer(s0, { type: "PLACE_MARK", index: 0 })
    const s2 = gameReducer(s1, { type: "PLACE_MARK", index: 0 })
    expect(s2).toBe(s1)
  })

  it("updates session scores when a game is won", () => {
    let s = createInitialGameState(players, "X")
    for (const pos of [0, 3, 1, 4, 2]) {
      s = gameReducer(s, { type: "PLACE_MARK", index: pos }) // X wins top row
    }
    expect(s.status.state).toBe("won")
    expect(s.scores.X).toBe(1)
  })

  it("REMATCH clears the board but keeps scores", () => {
    let s = createInitialGameState(players, "X")
    for (const pos of [0, 3, 1, 4, 2]) s = gameReducer(s, { type: "PLACE_MARK", index: pos })
    const r = gameReducer(s, { type: "REMATCH", startingMark: "O" })
    expect(r.board).toEqual(Array(9).fill(null))
    expect(r.scores.X).toBe(1)
    expect(r.activePlayer).toBe("O")
  })
})
