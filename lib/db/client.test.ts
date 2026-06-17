import { describe, it, expect } from "vitest"
import { makeTestDb } from "@/lib/helpers/test-db"

describe("schema", () => {
  it("creates the players, games, moves tables", () => {
    const db = makeTestDb()
    const names = db
      .prepare("SELECT name FROM sqlite_master WHERE type IN ('table','view')")
      .all()
      .map((r) => (r as { name: string }).name)
    expect(names).toEqual(
      expect.arrayContaining(["Players", "Games", "Moves"]),
    )
  })
})