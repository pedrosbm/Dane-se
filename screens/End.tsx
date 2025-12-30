import React, { useContext, useEffect, useState } from "react"

import { FlatList, View } from "react-native"
import { GameContext } from "../context/GameContext"
import { Text, Button, Avatar, Card } from "react-native-paper"

import { Player } from "../types/player"
import PaperView from "../components/PaperView"

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
        <PaperView style={{ padding: 20, height: "100%", gap: 10 }}>
            <Text style={{ textAlign: "center", fontSize: 40, marginTop: 20 }}>Resultado</Text>

            <FlatList contentContainerStyle={{ display: "flex", gap: 5 }} data={sortedPlayer} renderItem={({ item }) => (
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

            <Button style={{padding: 10}} mode="contained" onPress={handleEnding}>Finalizar</Button>
        </PaperView>
    )
}

export default End