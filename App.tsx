import React, { useEffect } from "react";

import { MD3DarkTheme, MD3LightTheme, PaperProvider } from "react-native-paper";
import { GameProvider } from "./context/GameContext"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { StatusBar, useColorScheme } from "react-native";

import Main from "./Main";

const App = () => {
	const colorScheme = useColorScheme();

	const paperTheme =
		colorScheme === 'dark'
			? { ...MD3DarkTheme }
			: { ...MD3LightTheme };

	return (
		<PaperProvider theme={paperTheme}>
			<SafeAreaProvider>
				<GameProvider>
					<StatusBar barStyle={colorScheme === 'light' ? "dark-content" : "light-content"} />
					<Main />
				</GameProvider>
			</SafeAreaProvider>
		</PaperProvider>
	)
}

export default App;