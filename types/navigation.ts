import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type GameNavigation = {
    bet: undefined,
    score: undefined,
    end: undefined
}
type GameNavigationProp = NativeStackNavigationProp<GameNavigation>;

type SignUpNavigation = {
    home: undefined,
    cadastro: undefined
}

type SignUpNavigationProp = NativeStackNavigationProp<SignUpNavigation>


export type { GameNavigation, GameNavigationProp, SignUpNavigation, SignUpNavigationProp};