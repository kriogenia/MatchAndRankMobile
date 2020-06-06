import React, { FunctionComponent } from "react";
import { View } from "react-native";
import { Drawer } from "react-native-paper";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { UserContext, UserContextConsumer } from "@hooks/index";
import {
	DarkModeSwitch,
	LogoutButton,
	UserView,
	AuthButton,
} from "@components/index";
import { styles } from "./settings-screen.styles";

const SettingsScreen: FunctionComponent = () => {
	return (
		<DrawerContentScrollView>
			<UserContextConsumer>
				{(context: UserContext | undefined) =>
					context && (
						<View style={styles.drawerContent}>
							<UserView context={context} />
							<Drawer.Section title="Preferences" style={styles.drawerSection}>
								<View style={styles.preference}>
									<DarkModeSwitch context={context} />
								</View>
							</Drawer.Section>
							{context.userInfo ? (
								<LogoutButton context={context} /> // When logged, displays the logout button
							) : (
								<AuthButton context={context} /> // When anon, shows the login button
							)}
						</View>
					)
				}
			</UserContextConsumer>
		</DrawerContentScrollView>
	);
};

export default SettingsScreen;
