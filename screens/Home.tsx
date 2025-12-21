import React from "react";

import { useNavigation } from "@react-navigation/native";
import { Image, useColorScheme, View } from "react-native";
import { Button, Text } from "react-native-paper";
import { SignUpNavigationProp } from "../types/navigation";
import PaperView from "../components/PaperView";
// import { Text } from "react-native-paper";

const Home = () => {
    const navigation = useNavigation<SignUpNavigationProp>()
    const colorScheme = useColorScheme()

    return (
        <PaperView style={{ alignItems: "center", justifyContent: "center", height: "100%" }}>
            <Image
                source={
                    colorScheme === "light" ?
                        require('../assets/fodase-light.png')
                        :
                        require('../assets/fodase-dark.png')}
                style={{ width: 300, height: 300 }}
            />

            <View>
                <Button icon={"play"} onPress={() => navigation.navigate("cadastro")} mode="contained">Novo jogo</Button>
            </View>
        </PaperView>
    )
}

export default Home;