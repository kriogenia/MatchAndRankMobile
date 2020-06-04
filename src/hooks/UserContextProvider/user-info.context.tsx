import React, {
	createContext,
	useState,
	FunctionComponent,
	Dispatch,
	SetStateAction,
} from "react";
import { User } from "react-native-google-signin";
import { DarkTheme, LightTheme } from "./theme";
import { Provider as PaperProvider, Theme } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";

export interface UserContext {
	userInfo: User | undefined;
	setUserInfo: Dispatch<SetStateAction<User | undefined>> | undefined;
	currentTheme: Theme;
	toggleTheme: () => void;
}

export type UserConsumerProps = {
	context: UserContext;
};

const { Provider, Consumer } = createContext<UserContext | undefined>(
	undefined,
);

const UserContextProvider: FunctionComponent = ({ children }) => {
	const [user, setUser] = useState<User | undefined>();
	const [isDark, setIsDark] = useState(true);

	const getTheme = () => {
		return isDark ? DarkTheme : LightTheme;
	};

	const toggleTheme = (): void => {
		setIsDark((_isDark) => !_isDark);
	};

	const userContext = {
		userInfo: user,
		setUserInfo: setUser,
		currentTheme: getTheme(),
		toggleTheme: toggleTheme,
	};

	return (
		<Provider value={userContext}>
			<PaperProvider theme={getTheme()}>
				<NavigationContainer theme={getTheme()}>{children}</NavigationContainer>
			</PaperProvider>
		</Provider>
	);
};

export { UserContextProvider, Consumer as UserContextConsumer };
