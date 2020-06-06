import React, { FunctionComponent } from "react";
import { UserConsumerProps } from "@hooks/UserContextProvider/user-info.context";
import { TouchableOpacity } from "react-native-gesture-handler";
import { GoogleSignin } from "react-native-google-signin";
import { Caption } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { styles } from "./logout-button.style";
import { View } from "react-native";

const LogoutButon: FunctionComponent<UserConsumerProps> = ({ context }) => {
	const { currentTheme, setUserInfo } = context;

	const signOut = async () => {
		try {
			await GoogleSignin.signOut();
			setUserInfo ? setUserInfo(undefined) : null;
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<TouchableOpacity style={styles.button} onPress={signOut}>
			<View style={styles.logout}>
				<MaterialCommunityIcons
					name="logout"
					size={20}
					color={currentTheme.colors.text}
				/>
				<Caption>Logout</Caption>
			</View>
		</TouchableOpacity>
	);
};

export default LogoutButon;
