import React, { FunctionComponent } from "react";
import { PersistantList } from "@hooks/index";
import { List, TouchableRipple } from "react-native-paper";
import { useTranslation } from "react-i18next";

type ListsAccordionProps = {
	collection: PersistantList[];
};

const ListsAccordion: FunctionComponent<ListsAccordionProps> = ({
	collection,
}) => {
	const { t } = useTranslation();

	const handleImport = (list: string) => {
		console.log("IMPORT " + list);
	};

	const handleDelete = (list: string) => {
		console.log("DELETE " + list);
	};

	return (
		<>
			{collection.map((list) => (
				<List.Accordion
					title={list.name}
					key={list.name}
					left={(props) => (
						<List.Icon {...props} icon="format-list-bulleted" />
					)}>
					{list.collection.map((entry) => (
						<List.Item title={entry} key={entry} />
					))}
					<List.Item
						title={t("MY_LISTS.import_list")}
						left={(props) => (
							<TouchableRipple onPress={() => handleImport(list.name)}>
								<List.Icon {...props} icon="playlist-play" />
							</TouchableRipple>
						)}
					/>
					<List.Item
						title={t("MY_LISTS.delete_list")}
						left={(props) => (
							<TouchableRipple onPress={() => handleDelete(list.name)}>
								<List.Icon {...props} icon="delete" />
							</TouchableRipple>
						)}
					/>
				</List.Accordion>
			))}
		</>
	);
};

export default ListsAccordion;
