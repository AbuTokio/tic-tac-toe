import { Mark } from "@/lib/game"

export default function randomMark(): Mark {
  return Math.random() < 0.5 ? "X" : "O"
}
