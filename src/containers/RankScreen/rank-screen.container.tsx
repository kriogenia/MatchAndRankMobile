import React, { FunctionComponent } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackParamList } from "navigator";
import { RouteProp } from "@react-navigation/native";
import { View } from "react-native";
import { Title } from "react-native-paper";
import { RankList, RestartButton, RankHeader } from "@components/index";
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
	const result = system.getResults();

	return (
		<View style={styles.layout}>
			<RankHeader name={system.name} result={result} />
			<RankList results={result} />
			<RestartButton navigation={navigation} />
		</View>
	);
};

export default RankScreen;
