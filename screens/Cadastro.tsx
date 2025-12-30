import React, { useContext, useEffect, useState } from "react";

import { LinearGradient } from 'expo-linear-gradient';

import { Text, Button, TextInput, useTheme, Modal, Portal, IconButton, Snackbar } from "react-native-paper";
import { FlatList, Keyboard, Pressable, StyleSheet, TouchableWithoutFeedback, View } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { GameNavigationProp } from "../types/navigation";

import { GameContext } from "../context/GameContext";

import Header from "../components/Header";
import PaperView from "../components/PaperView";
import RemovePlayer from "../components/RemovePlayer";
import PlayerCard from "../components/PlayerCard";

const Cadastro = () => {
    const [visible, setVisible] = useState<boolean>(false)
    const [nome, setNome] = useState<string>("")

    const { newPlayer, players, setRound } = useContext(GameContext)

    const navigation = useNavigation<GameNavigationProp>()
    const { colors } = useTheme()

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            header: () => <Header
                title="Jogadores"
                actions={[{
                    icon: "plus",
                    onPress: () => setVisible(true)
                }]} />
        })
    }, [navigation])

    const addPlayer = () => {
        newPlayer(nome)
        setVisible(false)
        setNome("")
    }

    const start = () => {
        if (players.length > 1) {
            setRound(1)
        }
    }

    return (
        <>
            {/* Tela */}
            <PaperView style={{ padding: 10, height: "100%" }}>
                <Button disabled={players.length <= 1} style={{ marginBottom: 10 }} mode="contained" onPress={start}>Jogar</Button>
                {/* lista de jogadores */}
                <View style={{ height: "82%" }}>
                    <FlatList contentContainerStyle={{ display: "flex", gap: 5 }} data={players} renderItem={({ item }) => (
                        <PlayerCard player={item} action={<RemovePlayer player={item} />} />
                    )} />
                </View>
            </PaperView>

            {/* Modal de criação de jogador */}
            <Portal>
                <Modal dismissable={true} visible={visible} onDismiss={Keyboard.dismiss} contentContainerStyle={{ padding: 20, margin: 20, backgroundColor: colors.background }} >
                    <View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                            <Text variant="headlineSmall">Novo jogador</Text>
                            <IconButton size={25} icon={"close"} onPress={() => setVisible(false)} />
                        </View>

                        <View style={{ marginBottom: 80 }}>
                            {/* TODO */}
                            {/* <TouchableWithoutFeedback
                                onPress={Keyboard.dismiss}
                                accessible={false}
                            > */}
                                <TextInput
                                    label="Nome"
                                    value={nome}
                                    onChangeText={setNome}
                                    mode="outlined"
                                />
                            {/* </TouchableWithoutFeedback> */}
                        </View>

                        {/* TODO seletor de cores */}

                        <View style={{ flexDirection: "row", justifyContent: "flex-end", gap: 10, marginTop: 10 }}>
                            <Button mode="outlined" onPress={() => setVisible(false)}>Cancelar</Button>
                            <Button mode="contained" onPress={() => addPlayer()}>Confirmar</Button>
                        </View>
                    </View>
                </Modal>
            </Portal>
        </>
    )
}

export default Cadastro;