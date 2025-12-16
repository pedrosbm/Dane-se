import React, { PropsWithChildren, useContext } from "react"

import { FlatList, View } from "react-native"
import { GameContext } from "../context/GameContext"
import { Avatar, Card, Text, IconButton, Button } from "react-native-paper"

import BetSelector from "./BetSelector"
import ScoreButton from "./ScoreButton"

type PlayersProps = {
    fase?: number
}

const Players = ({ fase }: PlayersProps) => {
    const { removePlayer, players, round } = useContext(GameContext)

    return (
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

                    <View style={{ justifyContent: "center", flexDirection: "row-reverse" }}>
                        {round == 0 && <IconButton size={40} onPress={() => removePlayer(item.nome)} iconColor={item.color.contrast} icon={"delete-circle"} />}
                        {fase == 2 && <ScoreButton player={item} />}
                        {round > 0 && <BetSelector disabled={fase == 2} player={item} />}
                    </View>
                </Card.Content>
            </Card>
        )} />
    )
}

export default Players