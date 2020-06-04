import "react-native-gesture-handler";
import React, { useState } from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { UserContextProvider } from "@hooks";
import Navigator from "./navigator";
import { DarkTheme, LightTheme } from "./hooks/UserContextProvider/theme";

const App = () => {

	return (
		<UserContextProvider>
			<Navigator/>
		</UserContextProvider>
	);
};

export default App;
