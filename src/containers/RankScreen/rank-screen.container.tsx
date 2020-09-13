import React, { FunctionComponent, useState, useEffect } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackParamList } from "navigator";
import { RouteProp } from "@react-navigation/native";
import { View } from "react-native";
import {
	RankList,
	RestartButton,
	RankHeader,
	SaveRankButton,
} from "@components/index";
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
	const [capture, setCapture] = useState<string>("");
	const [result, setResult] = useState<IEntry[]>(system.getResults());
	const [saved, setSaved] = useState<boolean>(false);

	useEffect(() => {
		setResult(system.getResults());
		setSaved(false);
	}, [system]);

	return (
		<View style={styles.layout}>
			<RankHeader name={system.name} result={result} capture={capture} />
			<RankList results={result} setCapture={setCapture} />
			<SaveRankButton
				name={system.name}
				result={result}
				saved={saved}
				setSaved={setSaved}
			/>
			<RestartButton navigation={navigation} />
		</View>
	);
};

export default RankScreen;
