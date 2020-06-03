import React from "react";
import { AuthButton } from "@components";
import { UserContextConsumer } from "@hooks/user-info.context";

const LoginScreen = () => {
	return (
		<UserContextConsumer>
			{context => <AuthButton context={context}/>}
		</UserContextConsumer>
	);
};

export default LoginScreen;
