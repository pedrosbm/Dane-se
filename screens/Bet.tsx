import React, { useContext, useEffect, useState } from "react"
import { GameContext } from "../context/GameContext"
import { View } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { GameNavigationProp } from "../types/navigation"
import { Button, Dialog, Portal, Text } from "react-native-paper"

import Players from "../components/Players"
import Header from "../components/Header"
import DialogModal from "../components/DialogModal"

const Bet = () => {
    const { round } = useContext(GameContext)

    const navigation = useNavigation<GameNavigationProp>()

    useEffect(() => {
        navigation.setOptions({
            header: () => <Header
                title="Aposta"
                actions={[{
                    icon: "arrow-right",
                    onPress: () => navigation.navigate("score")
                }]} />
        })
    }, [])

    return (
        <View style={{ height: "100%", padding: 10, gap: 10 }}>
            <View style={{ alignItems: "center" }}>
                <Text style={{ textAlign: "center", fontSize: 40 }}>Round {round}</Text>
                <Text>Façam suas apostas</Text>
            </View>

            <View style={{ height: "80%" }}>
                <Players fase={1} />
            </View >
        </View>

    )
}

export default Bet