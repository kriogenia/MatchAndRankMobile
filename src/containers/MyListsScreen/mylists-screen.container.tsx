import React, { FunctionComponent, useState, useCallback } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { useStorage, PersistantList } from "@hooks/index";
import { ListsAccordion } from "@components/index";
import { StackParamList } from "navigator";
import { StackNavigationProp } from "@react-navigation/stack";
import { Caption } from "react-native-paper";
import { useFocusEffect } from "@react-navigation/native";

type MyListsScreenProps = {
	navigation: StackNavigationProp<StackParamList, "Start">;
};

const MyListsScreen: FunctionComponent<MyListsScreenProps> = ({}) => {
	const [lists, setLists] = useState<PersistantList[]>([]);

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
			{lists.length > 0 ? (
				<ListsAccordion collection={lists} />
			) : (
				<Caption>No tienes bro</Caption>
			)}
		</ScrollView>
	);
};

export default MyListsScreen;
