import React, { FunctionComponent } from "react";
import { Caption, TouchableRipple, Switch } from "react-native-paper";
import { View } from "react-native";
import { UserContext } from "@hooks";

type DarkModeSwitchProps = {
	context: UserContext;
};

const DarkModeSwitch: FunctionComponent<DarkModeSwitchProps> = ({
	context,
}) => {
	const { toggleTheme, currentTheme } = context;

	return (
		<>
			<Caption>Dark Theme</Caption>
			<TouchableRipple onPress={toggleTheme}>
				<View pointerEvents="none">
					<Switch value={currentTheme.dark} />
				</View>
			</TouchableRipple>
		</>
	);
};

export default DarkModeSwitch;
