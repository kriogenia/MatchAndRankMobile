import React from "react";
import { AuthButton } from "@components";
import { UserContext, UserContextConsumer } from "@hooks";
import { View } from "react-native";

const LoginScreen = () => {
	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<UserContextConsumer>
				{(context: UserContext) => <AuthButton context={context} />}
			</UserContextConsumer>
		</View>
	);
};

export default LoginScreen;
