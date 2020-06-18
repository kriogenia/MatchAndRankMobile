import React, { useState, FunctionComponent } from "react";
import { View } from "react-native";
import { styles } from "./start-screen.styles";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackParamList } from "navigator";
import { UserContextConsumer, UserContext } from "@hooks/index";
import { AuthButton, AlertDialog } from "@components/index";
import { AuthStartScreen } from "./auth-start-screen.container";
import { RouteProp } from "@react-navigation/native";

type StartScreenProps = {
	navigation: StackNavigationProp<StackParamList, "Start">;
	route: RouteProp<StackParamList, "Start">;
};

const StartScreen: FunctionComponent<StartScreenProps> = ({
	route: { params },
	navigation,
}) => {
	const [alertText, setAlertText] = useState("");

	return (
		<View style={styles.layout}>
			<UserContextConsumer>
				{(context: UserContext | undefined) =>
					context &&
					(context.userInfo ? (
						<AuthStartScreen
							navigation={navigation}
							setAlert={setAlertText}
							imported={params?.imported}
						/>
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
