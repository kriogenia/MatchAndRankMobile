import React, { FunctionComponent } from "react";
import { View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { TouchableRipple, Caption, useTheme } from "react-native-paper";
import { styles } from "./settings-button.style";
import { useTranslation } from "react-i18next";

type SettingsButtonProps = {
	icon: string;
	onPress: () => void;
	text: string;
};

const SettingsButton: FunctionComponent<SettingsButtonProps> = ({
	icon,
	onPress,
	text,
}) => {
	const { colors } = useTheme();
	const { t } = useTranslation();

	return (
		<TouchableRipple onPress={onPress}>
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
