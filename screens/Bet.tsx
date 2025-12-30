import React, { useContext, useEffect } from "react"

import { GameContext } from "../context/GameContext"

import { useNavigation } from "@react-navigation/native"
import { GameNavigationProp } from "../types/navigation"

import { FlatList, View } from "react-native"
import { Button, Text } from "react-native-paper"
import Header from "../components/Header"
import BetSelector from "../components/BetSelector"
import PlayerCard from "../components/PlayerCard"
import PaperView from "../components/PaperView"

const Bet = () => {
    const { round, players, setRound } = useContext(GameContext)

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
    }, [navigation])

    return (
        <PaperView style={{ height: "100%", padding: 10, gap: 10 }}>
            <View style={{ alignItems: "center" }}>
                <Text style={{ textAlign: "center", fontSize: 40 }}>Round {round}</Text>
                <Text>Façam suas apostas</Text>
            </View>

            {/* <Button onPress={() => setRound(12)}>A du</Button> */}

            <View style={{ height: "82%" }}>
                <FlatList contentContainerStyle={{ display: "flex", gap: 5 }} data={players} renderItem={({ item }) => (
                    <PlayerCard player={item} action={<BetSelector player={item} />} />
                )} />
            </View >
        </PaperView>

    )
}

export default Bet