import React, { FunctionComponent } from "react";
import { View } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { Drawer } from "react-native-paper";
import { UserContext, UserContextConsumer } from "@hooks";
import { DarkModeSwitch, UserView } from "@components";
import { styles } from "./settings-screen.styles";

const SettingsScreen: FunctionComponent = () => {
	return (
		<DrawerContentScrollView>
			<UserContextConsumer>
				{(context: UserContext) => (
					<View style={styles.drawerContent}>
						<UserView context={context}/>
						<Drawer.Section title="Preferences" style={styles.drawerSection}>
							<View style={styles.preference}>
								<DarkModeSwitch context={context} />
							</View>
						</Drawer.Section>
					</View>
				)}
			</UserContextConsumer>
		</DrawerContentScrollView>
	);
};

export default SettingsScreen;
