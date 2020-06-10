import React, { FunctionComponent } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import {
	MatchScreen,
	SettingsScreen,
	StartScreen,
	RankScreen,
} from "@containers/index";
import { System } from "./model";

export type StackParamList = {
	Start: undefined;
	Match: { system: System };
	Rank: { system: System };
};

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator<StackParamList>();

const StackNavigator: FunctionComponent = () => {
	return (
		<Stack.Navigator initialRouteName="Start" headerMode="none">
			<Stack.Screen name="Start" component={StartScreen} />
			<Stack.Screen name="Match" component={MatchScreen} />
			<Stack.Screen name="Rank" component={RankScreen} />
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
