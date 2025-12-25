import React, { useContext, useEffect, useState } from "react";
import { Player } from "../types/player";
import { GameContext } from "../context/GameContext";
import { View } from "react-native";
import { IconButton, Text } from "react-native-paper"

type BetSelectorProps = {
    player: Player,
}

const BetSelector = ({ player }: BetSelectorProps) => {
    const [value, setValue] = useState<number>(0)
    const { setBet } = useContext(GameContext)

    // Reset value each round
    useEffect(() => {
        setValue(player.aposta)
    }, [player])

    // Set bet as the value updates
    useEffect(() => {
        setBet(player.nome, value)
    }, [value])

    return (
        <View style={{ justifyContent: "center" }}>
            <Text style={{ color: player.color.contrast }}>Aposta</Text>
            <View style={{ flexDirection: "row" }}>
                <IconButton iconColor={player.color.contrast} icon="minus" disabled={value === 0} onPress={() => setValue(value - 1)} />

                <View style={{ width: 50, alignItems: "center", justifyContent: "center" }}>
                    <Text style={{ fontSize: 15, color: player.color.contrast }}>{player.aposta}</Text>
                </View>

                <IconButton iconColor={player.color.contrast} icon="plus" onPress={() => setValue(value + 1)} />
            </View>
        </View>
    )
}

export default BetSelector