import React from "react";
import { AuthButton } from "@components/index";
import { UserContext, UserContextConsumer } from "@hooks/index";
import { View } from "react-native";
import { styles } from "./login-screen.style";

const LoginScreen = () => {
	return (
		<View style={styles.layout}>
			<UserContextConsumer>
				{(context: UserContext | undefined) =>
					context && <AuthButton context={context} />
				}
			</UserContextConsumer>
		</View>
	);
};

export default LoginScreen;
