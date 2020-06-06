import React, { FunctionComponent } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen, SettingsScreen } from "@containers/index";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const StackNavigator: FunctionComponent = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Login" component={LoginScreen} />
		</Stack.Navigator>
	);
};

const Navigator: FunctionComponent = () => {
	return (
		<Drawer.Navigator drawerContent={() => <SettingsScreen />}>
			<Drawer.Screen name="Stack" component={StackNavigator} />
		</Drawer.Navigator>
	);
};

export default Navigator;
