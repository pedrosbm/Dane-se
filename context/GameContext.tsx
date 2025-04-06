import React from "react";

import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { Player } from "../types/player";
import { GameContextType } from "../types/gameContext";

const GameContext = createContext<GameContextType>({} as GameContextType);

const GameProvider = ({ children }: PropsWithChildren) => {
    // Estados gerenciados pelo contexto de jogo
    const [players, setPlayers] = useState<Player[]>([
        { nome: "Pedro", aposta: 0, color: { value: "#fff", contrast: "#999" }, pontos: 0, scored: false },
        { nome: "Ana", aposta: 0, color: { value: "#f54242", contrast: "#ffffff" }, pontos: 0, scored: false },
        { nome: "Carlos", aposta: 0, color: { value: "#42f554", contrast: "#000000" }, pontos: 0, scored: false },
        { nome: "Mariana", aposta: 0, color: { value: "#4287f5", contrast: "#ffffff" }, pontos: 0, scored: false },
        { nome: "João", aposta: 0, color: { value: "#f5a142", contrast: "#000000" }, pontos: 0, scored: false },
        { nome: "Beatriz", aposta: 0, color: { value: "#d142f5", contrast: "#ffffff" }, pontos: 0, scored: false },
        { nome: "Lucas", aposta: 0, color: { value: "#42f5e6", contrast: "#000000" }, pontos: 0, scored: false },
        { nome: "Fernanda", aposta: 0, color: { value: "#f5e642", contrast: "#000000" }, pontos: 0, scored: false },
        { nome: "Rafael", aposta: 0, color: { value: "#a642f5", contrast: "#ffffff" }, pontos: 0, scored: false },
        { nome: "Sofia", aposta: 0, color: { value: "#42f5a6", contrast: "#000000" }, pontos: 0, scored: false }
    ]);
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

    return (
        <GameContext.Provider
            value={{
                players, round, newPlayer, setRound, removePlayer, score, setBet, resetBet, unscore, setPlayers
            }}>
            {children}
        </GameContext.Provider>
    )
}

export { GameContext, GameProvider };