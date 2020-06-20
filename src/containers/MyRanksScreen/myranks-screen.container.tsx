import React, { FunctionComponent, useState, useCallback } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { useStorage, PersistantRank } from "@hooks/index";
import { LoadView, RanksAccordion } from "@components/index";
import { Caption, Title } from "react-native-paper";
import { useFocusEffect } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import { styles } from "./myranks-screen.style";

const MyRanksScreen: FunctionComponent = () => {
	const [ranks, setRanks] = useState<PersistantRank[]>([]);

	const [loading, setLoading] = useState<boolean>(true);

	const { t } = useTranslation();
	const { get } = useStorage();

	useFocusEffect(
		useCallback(() => {
			get("rank")
				.then((pairs) => {
					const rankStrings: PersistantRank[] = pairs.map((pair) =>
						pair[1] ? JSON.parse(pair[1]) : undefined,
					);
					setRanks(rankStrings);
					setLoading(false);
				})
				.catch((e: Error) => {
					console.error(e.message);
				});
			return () => {};
		}, [get]),
	);

	return (
		<ScrollView>
			<Title style={styles.title}>{t("MY_RANKS.my_ranks")}</Title>
			{loading ? (
				<LoadView text={t("MY_RANKS.loading")} />
			) : ranks.length > 0 ? (
				<RanksAccordion collection={ranks} />
			) : (
				<Caption>{t("MY_RANKS.empty")}</Caption>
			)}
		</ScrollView>
	);
};

export default MyRanksScreen;
