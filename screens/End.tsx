import React, { useContext, useEffect, useState } from "react"

import { View } from "react-native"
import { GameContext } from "../context/GameContext"
import { Text, Button } from "react-native-paper"

import { Player } from "../types/player"

const End = () => {
    const { players, setRound, setPlayers } = useContext(GameContext)

    const [sortedPlayer, setSortedPlayers] = useState<Player[]>()

    useEffect(() => {
        const sortedPlayers = [...players].sort((a, b) => b.pontos - a.pontos)
        setSortedPlayers(sortedPlayers)
    }, [])

    const handleEnding = () => {
        setPlayers([])
        setRound(0)
    }

    return (
        <View style={{ padding: 20, height: "100%" }}>
            <Text style={{ textAlign: "center", fontSize: 40 }}>Resultado</Text>
            <Button mode="contained" onPress={handleEnding}>Finalizar</Button>
        </View>
    )
}

export default End