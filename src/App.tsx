import "react-native-gesture-handler";
import React from "react";
import Navigator from "./navigator";
import { UserContextProvider } from "@hooks";

const App = () => {
	return (
		<UserContextProvider>
			<Navigator />
		</UserContextProvider>
	);
};

export default App;
