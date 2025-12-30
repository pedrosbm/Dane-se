import React, { createContext, PropsWithChildren, useState } from "react";

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
    const [players, setPlayers] = useState<Player[]>([
        // TODO remover jogadores mocados
        {
            nome: "pedro",
            aposta: 0,
            color: { contrast: "#fff", value: "#647933ff" },
            pontos: 0,
            scored: false
        },
        {
            nome: "monte",
            aposta: 0,
            color: { contrast: "#fff", value: "#d21" },
            pontos: 0,
            scored: false
        },
    ]);
    const [round, setRound] = useState<number>(0);

    // Gera uma cor aleatória dentro do espectro solicitado
    const generateRandomColor = () => {
        const randInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

        const r = randInt(10, 200);
        const g = randInt(70, 190);
        const b = randInt(170, 210);

        const toHex = (n: number) => n.toString(16).padStart(2, '0');
        const value = `#${toHex(r)}${toHex(g)}${toHex(b)}`;

        // Perceived brightness (0-255). Threshold chosen for readable contrast.
        const brightness = (r * 299 + g * 587 + b * 114) / 1000;
        const contrast = brightness > 186 ? '#000000' : '#ffffff';

        return { value, contrast };
    }

    const newPlayer = async (name: string) => {
        // Api de cores

        const color = generateRandomColor();

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