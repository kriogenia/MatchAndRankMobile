import "react-native-gesture-handler";
import React, { useState } from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { UserContextProvider } from "@hooks";
import Navigator from "./navigator";
import { DarkTheme, LightTheme } from "./theme";

const App = () => {
	const [isDark, setIsDark] = useState(true);

	const currentTheme = isDark ? DarkTheme : LightTheme;

	const toggleTheme = (): void => {
		setIsDark((_isDark) => !_isDark);
	};

	return (
		<UserContextProvider>
			<PaperProvider theme={currentTheme}>
				<Navigator theme={currentTheme} toggleTheme={toggleTheme} />
			</PaperProvider>
		</UserContextProvider>
	);
};

export default App;
