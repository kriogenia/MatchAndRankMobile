import React, {
	createContext,
	useState,
	FunctionComponent,
	Dispatch,
	SetStateAction,
} from "react";
import { User } from "react-native-google-signin";

export interface UserContext {
	userInfo: User | undefined;
	setUserInfo: Dispatch<SetStateAction<User | undefined>> | undefined;
}

const { Provider, Consumer } = createContext<UserContext | undefined>(
	undefined,
);

const UserContextProvider: FunctionComponent = ({ children }) => {
	const [user, setUser] = useState<User | undefined>();

	const userContext = {
		userInfo: user,
		setUserInfo: setUser,
	};

	return <Provider value={userContext}>{children}</Provider>;
};

export { UserContextProvider, Consumer as UserContextConsumer };
