"use client"
import { useReducer } from "react"
import { createInitialGameState, gameReducer, type SeatedPlayers } from "@/lib/game"
import randomMark from "@/lib/helpers/random-mark"

export function useGame(players: SeatedPlayers) {
  const [state, dispatch] = useReducer(gameReducer, null, () => createInitialGameState(players, randomMark()))

  function placeMark(index: number) {
    dispatch({ type: "PLACE_MARK", index })
  }

  function rematch() {
    dispatch({ type: "REMATCH", startingMark: randomMark() })
  }

  return { state, placeMark, rematch }
}
