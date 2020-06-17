import React, { FunctionComponent } from "react";
import { View } from "react-native";
import { Drawer } from "react-native-paper";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { UserContext, UserContextConsumer } from "@hooks/index";
import {
	DarkModeSwitch,
	UserView,
	LanguagePicker,
	SettingsButton,
} from "@components/index";
import { styles } from "./settings-screen.styles";
import { useTranslation } from "react-i18next";

const navButtons = [
	{ icon: "format-list-bulleted", route: "MyLists", text: "my_lists" },
	{ icon: "format-list-numbered", route: "MyRanks", text: "my_ranks" },
];

const SettingsScreen: FunctionComponent = () => {
	const { t } = useTranslation();

	return (
		<DrawerContentScrollView>
			<UserContextConsumer>
				{(context: UserContext | undefined) =>
					context && (
						<View style={styles.drawerContent}>
							{context.userInfo && <UserView context={context} />}
							{navButtons.map((x) => (
								<SettingsButton
									icon={x.icon}
									route={x.route}
									text={x.text}
									key={x.text}
								/>
							))}
							<Drawer.Section
								title={t("SETTINGS.preferences")}
								style={styles.drawerSection}>
								<View style={styles.preference}>
									<DarkModeSwitch context={context} />
								</View>
								<View style={styles.preference}>
									<LanguagePicker />
								</View>
							</Drawer.Section>
						</View>
					)
				}
			</UserContextConsumer>
		</DrawerContentScrollView>
	);
};

export default SettingsScreen;
