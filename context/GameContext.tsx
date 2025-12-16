import React from "react";

import { createContext, PropsWithChildren, useState } from "react";
import { Player } from "../types/player";

type Context = {
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

const GameContext = createContext<Context>({} as Context);

const GameProvider = ({ children }: PropsWithChildren) => {
    // Estados gerenciados pelo contexto de jogo
    const [players, setPlayers] = useState<Player[]>([]);
    const [round, setRound] = useState<number>(0);
    const [fase, setFase] = useState<number>(0);

    const newPlayer = async (name: string) => {
        // Api de cores
        const color = await fetch("https://www.thecolorapi.com/random")
            .then(response => { return response.json() })
            .then(json => { return { value: json.hex.value, contrast: json.contrast.value } })
            .catch(error => { return { value: "#fff", contrast: "#999" } })

        setPlayers([...players, {
            nome: name,
            pontos: 0,
            color: color,
            aposta: 0,
            scored: false
        }])
    }

    const removePlayer = (name: string) => {
        setPlayers(players.filter(player => player.nome !== name));
    }

    const setBet = (name: string, bet: number) => {
        const updatedPlayers = players.map(player => (
            player.nome === name ? { ...player, aposta: bet } : player
        ))
        setPlayers(updatedPlayers)
    }

    const resetBet = () => {
        const updatedPlayers = players.map(player => ({ ...player, aposta: 0, scored: false }))

        setPlayers(updatedPlayers)
    }

    const score = (name: string) => {
        const updatedPlayers = players.map(player =>
            player.nome === name ? { ...player, scored: true, pontos: player.pontos + player.aposta + 10 } : player
        )
        setPlayers(updatedPlayers)
    }

    const unscore = (name: string) => {
        const updatedPlayers = players.map(player =>
            player.nome === name ? { ...player, scored: false, pontos: player.pontos - player.aposta - 10 } : player
        )
        setPlayers(updatedPlayers)
    }

    const value: Context = {
        players,
        round,
        newPlayer,
        setRound,
        removePlayer,
        score,
        setBet,
        resetBet,
        unscore,
        setPlayers
    }

    return (
        <GameContext.Provider
            value={value}>
            {children}
        </GameContext.Provider>
    )
}

export { GameContext, GameProvider };