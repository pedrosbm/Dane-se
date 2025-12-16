import React, { useContext, useEffect, useState } from "react"
import { View } from "react-native"
import Players from "../components/Players"
import { Button, Text } from "react-native-paper"
import { GameContext } from "../context/GameContext"
import { useNavigation } from "@react-navigation/native"
import { GameNavigationProp } from "../types/navigation"
import Header from "../components/Header"
import DialogModal from "../components/DialogModal"

const Score = () => {
    const [visible, setVisible] = useState<boolean>(false)

    const { round, resetBet, setRound } = useContext(GameContext)

    const navigation = useNavigation<GameNavigationProp>()

    const nextRound = () => {
        resetBet()
        round + 1 == 13 ? navigation.navigate("end") : navigation.popToTop()
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
    }, [])


    return (
        <>
            {/* Tela */}
            <View style={{ height: "100%", padding: 10, gap: 10 }}>
                <View style={{ alignItems: "center" }}>
                    <Text style={{ textAlign: "center", fontSize: 40 }}>Round {round}</Text>
                    <Text>Conceda os pontos</Text>
                </View>

                <View style={{ height: "80%" }}>
                    <Players fase={2} />
                </View >
            </View>

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