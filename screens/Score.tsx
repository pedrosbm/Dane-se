import React, { useContext, useEffect, useState } from "react"
import { FlatList, View } from "react-native"

import { useNavigation } from "@react-navigation/native"
import { GameNavigationProp } from "../types/navigation"

import { GameContext } from "../context/GameContext"

import { Text } from "react-native-paper"
import Header from "../components/Header"
import DialogModal from "../components/DialogModal"
import PlayerCard from "../components/PlayerCard"
import ScoreButton from "../components/ScoreButton"
import PaperView from "../components/PaperView"

const Score = () => {
    const [visible, setVisible] = useState<boolean>(false)
    const { round, resetBet, setRound, players } = useContext(GameContext)

    const navigation = useNavigation<GameNavigationProp>()

    const nextRound = () => {
        resetBet()
        round + 1 === 13 ? navigation.navigate("end") : navigation.popToTop()
        setRound(round + 1)
    }

    useEffect(() => {
        navigation.setOptions({
            header: () => <Header
                title="Score"
                actions={[{
                    icon: "check",
                    onPress: () => setVisible(true)
                }]} />
        })
    }, [navigation])


    return (
        <>
            {/* Tela */}
            <PaperView style={{ height: "100%", padding: 10, gap: 10 }}>
                <View style={{ alignItems: "center" }}>
                    <Text style={{ textAlign: "center", fontSize: 40 }}>Round {round}</Text>
                    <Text>Conceda os pontos</Text>
                </View>

                <View style={{ height: "82%" }}>
                    <FlatList contentContainerStyle={{ display: "flex", gap: 5 }} data={players} renderItem={({ item }) => (
                        <PlayerCard player={item} action={<ScoreButton player={item} />} />
                    )} />
                </View >
            </PaperView>

            {/* Caixa de dialogo */}
            <DialogModal
                visible={visible}
                setVisible={setVisible}
                title="Confirmação."
                description="Todos os jogadores foram pontuados? (não será possível voltar a rodada)."
                confirmAction={nextRound}
            />
        </>
    )
}

export default Score