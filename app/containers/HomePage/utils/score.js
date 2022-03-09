import { getScores } from "./score-api";

export function getTopFive() {
  return getScores()
}
