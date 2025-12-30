import React, { useContext } from "react"
import { GameContext } from "../context/GameContext"
import { Button } from "react-native-paper"
import { Player } from "../types/player"
import { View } from "react-native"

type scoreProps = {
    player: Player
}

const ScoreButton = ({ player }: scoreProps) => {
    const { score, unscore } = useContext(GameContext)

    const handlePress = () => {
        player.scored ? unscore(player.nome) : score(player.nome)
    }

    return (
        <View style={{ justifyContent: "center" }}>
            <Button icon={player.scored ? "undo" : "check"} mode="contained" onPress={handlePress}>{player.scored ? "Desfazer" : "Pontuar"}</Button>
        </View>
    )
}

export default ScoreButton