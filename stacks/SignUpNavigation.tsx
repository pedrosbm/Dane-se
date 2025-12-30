import React from "react"

import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { SignUpNavigation as Navigation } from "../types/navigation"
import { NavigationContainer } from "@react-navigation/native"

import Home from "../screens/Home"
import Cadastro from "../screens/Cadastro"

const SignUpNavigation = () => {
    const Stack = createNativeStackNavigator<Navigation>()

    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="home" component={Home}/>
                <Stack.Screen name="cadastro" component={Cadastro}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default SignUpNavigation