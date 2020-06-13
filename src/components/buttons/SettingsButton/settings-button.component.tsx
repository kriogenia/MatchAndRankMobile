import React, { FunctionComponent } from "react";
import { View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { TouchableRipple, Caption, useTheme } from "react-native-paper";
import { styles } from "./settings-button.style";
import { useTranslation } from "react-i18next";

type SettingsButtonProps = {
	icon: string;
	route: string;
	text: string;
};

const SettingsButton: FunctionComponent<SettingsButtonProps> = ({
	icon,
	route,
	text,
}) => {
	const { colors } = useTheme();
	const { t } = useTranslation();

	const handleNavigation = () => {
		// navigate to
		console.log(route);
	};

	return (
		<TouchableRipple onPress={handleNavigation} >
			<View style={styles.selector}>
				<MaterialCommunityIcons
					name={icon}
					size={20}
					color={colors.text}
					style={styles.item}
				/>
				<Caption>{t(`SETTINGS.${text}`)}</Caption>
			</View>
		</TouchableRipple>
	);
};

export default SettingsButton;
