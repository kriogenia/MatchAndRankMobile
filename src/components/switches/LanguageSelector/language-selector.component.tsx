import React, { FunctionComponent, useState } from "react";
import { Menu, TouchableRipple, Caption, useTheme } from "react-native-paper";
import { useTranslation } from "react-i18next";
import i18n from "../../../i18n";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { View } from "react-native";
import { styles } from "./language-selector.styles";

const languages = ["en", "es", "gl"];

const LanguageSelector: FunctionComponent = () => {
	const [isVisible, setIsVisible] = useState(false);

	const { colors } = useTheme();
	const { t } = useTranslation();

	const handleToggle = (): void => {
		setIsVisible((_isVisible) => !_isVisible);
	};

	const changeLanguage = (lng: string): void => {
		setIsVisible(false);
		i18n.changeLanguage(lng);
	};

	return (
		<Menu
			visible={isVisible}
			onDismiss={() => {}}
			anchor={
				<View style={styles.selector}>
					<MaterialCommunityIcons
						name="earth"
						size={20}
						color={colors.text}
						style={styles.item}
					/>
					<TouchableRipple onPress={handleToggle} style={styles.takeAll}>
						<Caption>{t("SETTINGS.change_language")}</Caption>
					</TouchableRipple>
				</View>
			}>
			{languages.map((lng) => (
				<Menu.Item
					onPress={() => changeLanguage(lng)}
					title={t(`LANGUAGE.${lng}`)}
					key={lng}
				/>
			))}
		</Menu>
	);
};

export default LanguageSelector;
