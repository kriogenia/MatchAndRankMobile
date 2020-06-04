import React, { FunctionComponent } from "react";
import { View, StyleSheet, Switch } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { TouchableRipple, Caption } from "react-native-paper";

type SettingsProps = {
	isDark: boolean;
	toggleTheme: () => void;
};

const SettingsScreen: FunctionComponent<SettingsProps> = ({
	isDark,
	toggleTheme,
}) => {
	return (
		<DrawerContentScrollView>
			<View style={styles.preference}>
				<Caption>Dark Theme</Caption>
				<TouchableRipple onPress={toggleTheme}>
					<View pointerEvents="none">
						<Switch value={isDark} />
					</View>
				</TouchableRipple>
			</View>
		</DrawerContentScrollView>
	);
};

const styles = StyleSheet.create({
	preference: {
		flexDirection: "row",
		justifyContent: "space-between",
		paddingVertical: 12,
		paddingHorizontal: 16,
	},
});

export default SettingsScreen;
