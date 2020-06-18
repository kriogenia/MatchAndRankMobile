import React, { FunctionComponent, useState, useEffect } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackParamList } from "navigator";
import { RouteProp } from "@react-navigation/native";
import { View } from "react-native";
import { RankList, RestartButton, RankHeader } from "@components/index";
import { styles } from "./rank-screen.style";
import { IEntry } from "@model/index";

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
	const [result, setResult] = useState<IEntry[]>(system.getResults());

	useEffect(() => {
		setResult(system.getResults());
	}, [system]);

	return (
		<View style={styles.layout}>
			<RankHeader name={system.name} result={result} />
			<RankList results={result} />
			<RestartButton navigation={navigation} />
		</View>
	);
};

export default RankScreen;
