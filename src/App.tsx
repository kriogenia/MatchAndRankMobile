import "react-native-gesture-handler";
import React from "react";
import { UserContextProvider } from "@hooks/index";
import Navigator from "./navigator";

const App = () => {
	return (
		<UserContextProvider>
			<Navigator />
		</UserContextProvider>
	);
};

export default App;
