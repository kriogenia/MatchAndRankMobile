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
	LanguageSelector,
} from "@components/index";
import { styles } from "./settings-screen.styles";
import { useTranslation } from "react-i18next";

const SettingsScreen: FunctionComponent = () => {
	const { t } = useTranslation();

	return (
		<DrawerContentScrollView>
			<UserContextConsumer>
				{(context: UserContext | undefined) =>
					context && (
						<View style={styles.drawerContent}>
							{context.userInfo && <UserView context={context} />}
							<Drawer.Section
								title={t("SETTINGS.preferences")}
								style={styles.drawerSection}>
								<View style={styles.preference}>
									<DarkModeSwitch context={context} />
								</View>
								<View style={styles.preference}>
									<LanguageSelector />
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
