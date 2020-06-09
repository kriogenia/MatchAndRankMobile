import React, { FunctionComponent } from "react";
import { Caption, TouchableRipple, Switch } from "react-native-paper";
import { View } from "react-native";
import { UserContext } from "@hooks/index";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { styles } from "./darkmode-switch.styles";
import { useTranslation } from "react-i18next";

type DarkModeSwitchProps = {
	context: UserContext;
};

const DarkModeSwitch: FunctionComponent<DarkModeSwitchProps> = ({
	context,
}) => {
	const { toggleTheme, currentTheme } = context;

	const { t } = useTranslation();

	return (
		<>
			<MaterialCommunityIcons
				name="theme-light-dark"
				size={20}
				color={currentTheme.colors.text}
				style={styles.item}
			/>
			<Caption>{t("SETTINGS.dark_mode")}</Caption>
			<TouchableRipple onPress={toggleTheme}>
				<View pointerEvents="none">
					<Switch value={currentTheme.dark} />
				</View>
			</TouchableRipple>
		</>
	);
};

export default DarkModeSwitch;
