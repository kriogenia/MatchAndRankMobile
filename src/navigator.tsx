import React, { FunctionComponent } from "react";
import { NavigationContainer, Theme } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen, SettingsScreen } from "@containers";

type NavigatorProps = {
	theme: Theme;
	toggleTheme: () => void;
};

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const StackNavigator: FunctionComponent = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Login" component={LoginScreen} />
		</Stack.Navigator>
	);
};

const Navigator: FunctionComponent<NavigatorProps> = ({
	theme,
	toggleTheme,
}) => {
	return (
		<NavigationContainer theme={theme}>
			<Drawer.Navigator
				drawerContent={() => (
					<SettingsScreen toggleTheme={toggleTheme} isDark={theme.dark} />
				)}>
				<Drawer.Screen name="Stack" component={StackNavigator} />
			</Drawer.Navigator>
		</NavigationContainer>
	);
};

export default Navigator;
