import { Player } from "./player"

type GameContextType = {
    players: Player[],
    round: number,
    newPlayer: (name: string) => void,
    removePlayer: (name: string) => void,
    setBet: (name: string, bet: number) => void,
    setPlayers: (players: Player[]) => void,
    resetBet: () => void,
    setRound: (round: number) => void,
    score: (name: string) => void,
    unscore: (name: string) => void
}

export type { GameContextType }