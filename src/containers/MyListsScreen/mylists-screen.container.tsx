import React, { FunctionComponent, useState, useCallback } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { useStorage, PersistantList } from "@hooks/index";
import { ListsAccordion } from "@components/index";
import { StackParamList } from "navigator";
import { StackNavigationProp } from "@react-navigation/stack";
import { Caption, Title } from "react-native-paper";
import { useFocusEffect } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import { styles } from "./mylists-screen.style";

type MyListsScreenProps = {
	navigation: StackNavigationProp<StackParamList, "MyLists">;
};

const MyListsScreen: FunctionComponent<MyListsScreenProps> = ({
	navigation,
}) => {
	const [lists, setLists] = useState<PersistantList[]>([]);

	const { t } = useTranslation();
	const { getLists } = useStorage();

	useFocusEffect(
		useCallback(() => {
			getLists()
				.then((pairs) => {
					const listStrings: PersistantList[] = pairs.map((pair) =>
						pair[1] ? JSON.parse(pair[1]) : undefined,
					);
					setLists(listStrings);
				})
				.catch((e: Error) => {
					console.error(e.message);
				});
			return () => {};
		}, [getLists]),
	);

	return (
		<ScrollView>
			<Title style={styles.title}>{t("MY_LISTS.my_lists")}</Title>
			{lists.length > 0 ? (
				<ListsAccordion collection={lists} navigation={navigation} />
			) : (
				<Caption>No tienes bro</Caption>
			)}
		</ScrollView>
	);
};

export default MyListsScreen;
