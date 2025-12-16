import React from "react";

import { MD3LightTheme, PaperProvider } from "react-native-paper";
import { GameProvider } from "./context/GameContext"

import Main from "./Main";

const App = () => {
	

	return (
		<PaperProvider theme={MD3LightTheme}>
			<GameProvider>
				<Main />
			</GameProvider>
		</PaperProvider>
	)
}

export default App;