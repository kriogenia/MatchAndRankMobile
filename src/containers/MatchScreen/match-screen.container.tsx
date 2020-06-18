import React, { FunctionComponent, useState, useEffect } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackParamList } from "navigator";
import { View } from "react-native";
import { Match } from "@model/index";
import { RouteProp } from "@react-navigation/native";
import { Title, ProgressBar } from "react-native-paper";
import { useTranslation } from "react-i18next";
import { MatchPicker, LoadView } from "@components/index";
import {
	InterstitialAd,
	AdEventType,
	TestIds,
} from "@react-native-firebase/admob";
import { styles } from "./match-screen.style";
import { adUnitID } from "./../../../private.config";

const adUnitId = __DEV__ ? TestIds.INTERSTITIAL : adUnitID;

const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
	requestNonPersonalizedAdsOnly: true,
});

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
	const [adLoaded, setAdLoaded] = useState("NOT_YET_LOADED");

	const { t } = useTranslation();

	// Component Did Mount
	useEffect(() => {
		// Reset states
		setCounter(1);
		setFinished(false);
		setAdLoaded("NOT_YET_LOADED");
		// Set and solicitates ad
		const eventListener = interstitial.onAdEvent((type) => {
			if (type === AdEventType.LOADED) {
				setAdLoaded("LOADED");
			} else if (
				type === AdEventType.CLICKED ||
				type === AdEventType.CLOSED ||
				type === AdEventType.LEFT_APPLICATION
			) {
				navigation.navigate("Rank", { system: system });
			}
		});
		interstitial.load();
		return () => {
			eventListener();
		};
	}, [system, navigation]);

	// Match loading
	useEffect(() => {
		const match = system.nextMatch();
		if (match == null) {
			setFinished(true);
		} else {
			setCurrentMatch(match);
			setExpected(match.expected);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [counter]);

	// Finishing management
	useEffect(() => {
		if (finished) {
			if (adLoaded === "LOADED") interstitial.show();
			else if (adLoaded === "SKIP")
				navigation.navigate("Rank", { system: system });
			else {
				setTimeout(() => {
					if (adLoaded !== "LOADED") setAdLoaded("SKIP");
				}, 5000);
			}
		}
	}, [finished, adLoaded, navigation, system]);

	const vote = (id: string): void => {
		id === "a"
			? system.voteLeft()
			: id === "b"
			? system.voteRight()
			: //@ts-ignore
			  system.voteDraw();
		setCounter(counter + 1);
	};

	return (
		<View style={styles.layout}>
			<View style={styles.counter}>
				<Title>
					{finished
						? `${t("MATCH.finished")}`
						: `${t("MATCH.match_counter")}${counter}`}
				</Title>
			</View>
			{currentMatch && !finished ? (
				<MatchPicker
					match={currentMatch}
					vote={vote}
					draw={system.allowsDraw()}
				/>
			) : (
				<LoadView text={finished ? t("MATCH.loading_ad") : " "} />
			)}
			{!finished && <ProgressBar progress={(counter - 1) / expected} />}
		</View>
	);
};

export default MatchScreen;
