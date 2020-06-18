import React, { FunctionComponent } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
	MatchScreen,
	SettingsScreen,
	StartScreen,
	RankScreen,
	MyListsScreen,
} from "@containers/index";
import { System } from "./model";

export type StackParamList = {
	Start: undefined;
	Match: { system: System };
	Rank: { system: System };
	MyLists: undefined;
};

const Drawer = createDrawerNavigator<StackParamList>();

const Navigator: FunctionComponent = () => {
	return (
		<Drawer.Navigator
			backBehavior="initialRoute"
			initialRouteName="Start"
			drawerContent={(props) => <SettingsScreen {...props} />}>
			<Drawer.Screen name="Start" component={StartScreen} />
			<Drawer.Screen name="Match" component={MatchScreen} />
			<Drawer.Screen name="Rank" component={RankScreen} />
			<Drawer.Screen name="MyLists" component={MyListsScreen} />
		</Drawer.Navigator>
	);
};

export default Navigator;
