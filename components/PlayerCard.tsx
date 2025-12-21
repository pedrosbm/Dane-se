import React, { ReactNode } from "react"

import { View } from "react-native"
import { Avatar, Card, Text } from "react-native-paper"
import { Player as Player } from "../types/player"

type PlayerProps = {
    player: Player,
    action: ReactNode
}

const PlayerCard = ({ player, action }: PlayerProps) => {
    return (
        <Card key={player.nome} style={{ padding: 5, backgroundColor: player.color.value }}>
            {/* Jogador */}
            <Card.Content style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center",  height: 100 }}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Avatar.Icon size={50} icon="account" />
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{ color: player.color.contrast }}>{player.nome}</Text>
                        <Text style={{ color: player.color.contrast }}>{player.pontos} Pontos</Text>
                    </View>
                </View>

                <View style={{ justifyContent: "center", flexDirection: "row-reverse" }}>
                    {action}
                </View>
            </Card.Content>
        </Card>
    )
}

export default PlayerCard