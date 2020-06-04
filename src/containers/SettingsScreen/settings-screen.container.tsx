import React, { FunctionComponent } from "react";
import { View, StyleSheet } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { UserContext, UserContextConsumer } from "@hooks";
import { DarkModeSwitch } from "@components/";

const SettingsScreen: FunctionComponent = () => {
	return (
		<DrawerContentScrollView>
			<View style={styles.preference}>
				<UserContextConsumer>
					{(context: UserContext) => <DarkModeSwitch context={context}/>}
				</UserContextConsumer>
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
