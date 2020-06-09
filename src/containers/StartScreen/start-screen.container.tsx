import React, { useState, FunctionComponent } from "react";
import { View } from "react-native";
import { styles } from "./start-screen.styles";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackParamList } from "navigator";
import { UserContextConsumer, UserContext } from "@hooks/index";
import { AuthButton, AlertDialog } from "@components/index";
import { AuthStartScreen } from "./auth-start-screen.container";

type StartScreenProps = {
	navigation: StackNavigationProp<StackParamList, "Start">;
};

const StartScreen: FunctionComponent<StartScreenProps> = ({ navigation }) => {
	const [alertText, setAlertText] = useState("");

	return (
		<View style={styles.layout}>
			<UserContextConsumer>
				{(context: UserContext | undefined) =>
					context &&
					(context.userInfo ? (
						<AuthStartScreen navigation={navigation} setAlert={setAlertText} />
					) : (
						<AuthButton context={context} />
					))
				}
			</UserContextConsumer>
			<AlertDialog alertText={alertText} setAlertText={setAlertText} />
		</View>
	);
};

export default StartScreen;
