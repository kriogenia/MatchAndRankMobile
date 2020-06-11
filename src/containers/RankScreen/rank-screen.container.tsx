import React, { FunctionComponent } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackParamList } from "navigator";
import { RouteProp } from "@react-navigation/native";
import { View } from "react-native";
import { Title } from "react-native-paper";
import { RankList, RestartButton } from "@components/index";
import { styles } from "./rank-screen.style";

type RankScreenProps = {
	navigation: StackNavigationProp<StackParamList, "Rank">;
	route: RouteProp<StackParamList, "Rank">;
};

const RankScreen: FunctionComponent<RankScreenProps> = ({
	route: {
		params: { system },
	},
	navigation,
}) => {
	return (
		<View style={styles.layout}>
			<Title style={styles.title}>{system.name}</Title>
			<RankList results={system.getResults()} />
			<RestartButton navigation={navigation} />
		</View>
	);
};

export default RankScreen;
