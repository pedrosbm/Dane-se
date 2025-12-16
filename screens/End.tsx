import React, { useContext, useEffect, useState } from "react"

import { FlatList, View } from "react-native"
import { GameContext } from "../context/GameContext"
import { Text, Button, Avatar, Card } from "react-native-paper"

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

            <FlatList contentContainerStyle={{ display: "flex", gap: 5 }} data={players} renderItem={({ item }) => (
            <Card key={item.nome} style={{ padding: 5, backgroundColor: item.color.value }}>
                {/* Jogador */}
                <Card.Content style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Avatar.Icon size={50} icon="account" />
                        <View style={{ marginLeft: 10 }}>
                            <Text style={{ color: item.color.contrast }}>{item.nome}</Text>
                            <Text style={{ color: item.color.contrast }}>{item.pontos} Pontos</Text>
                        </View>
                    </View>
                </Card.Content>
            </Card>
        )} />
        </View>
    )
}

export default End