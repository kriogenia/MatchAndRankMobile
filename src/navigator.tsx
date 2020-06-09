import React, { FunctionComponent } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { SettingsScreen, StartScreen } from "@containers/index";
import { System } from "./model";
import MatchScreen from "@containers/MatchScreen/match-screen.container";

export type StackParamList = {
	Start: undefined;
	Match: { system: System };
};

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator<StackParamList>();

const StackNavigator: FunctionComponent = () => {
	return (
		<Stack.Navigator initialRouteName="Start" headerMode="none">
			<Stack.Screen name="Start" component={StartScreen} />
			<Stack.Screen name="Match" component={MatchScreen} />
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
