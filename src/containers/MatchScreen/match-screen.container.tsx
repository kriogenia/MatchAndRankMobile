import React, { FunctionComponent, useState, useEffect } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackParamList } from "navigator";
import { View } from "react-native";
import { Match } from "@model/index";
import { RouteProp } from "@react-navigation/native";
import { Title } from "react-native-paper";
import { useTranslation } from "react-i18next";
import { MatchPicker } from "@components/index";
import { styles } from "./match-screen.style";

type MatchScreenProps = {
	navigation: StackNavigationProp<StackParamList, "Match">;
	route: RouteProp<StackParamList, "Match">;
};

const MatchScreen: FunctionComponent<MatchScreenProps> = ({
	route: {
		params: { system },
	},
	navigation,
}) => {
	const [counter, setCounter] = useState(1);
	const [expected, setExpected] = useState(1);
	const [currentMatch, setCurrentMatch] = useState<Match>();
	const [finished, setFinished] = useState(false);

	const { t } = useTranslation();

	useEffect(() => {
		const match = system.nextMatch();
		if (match == null) {
			setFinished(true);
		} else {
			setCurrentMatch(match);
			setExpected(match.expected);
		}
	}, [counter, system]);

	useEffect(() => {
		if (finished) {
			console.log(system.getResults());
			console.log("PERSIST RESULTS");
			navigation.navigate("Start");
		}
	}, [finished, navigation, system]);

	const vote = (id: string): void => {
		id === "a" ? system.voteLeft() : system.voteRight();
		setCounter(counter + 1);
	};

	return (
		<View style={styles.layout}>
			<View style={styles.counter}>
				<Title>
					{finished
						? `t("MATCH.finished)`
						: `${t("MATCH.match_counter")}${counter}`}
				</Title>
			</View>
			{currentMatch && <MatchPicker match={currentMatch} vote={vote} />}
			{/*	{!finished && <ProgressBar counter={counter} expected={expected} />}
			 */}
		</View>
	);
};

export default MatchScreen;
