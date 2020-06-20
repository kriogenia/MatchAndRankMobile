import React, { FunctionComponent, useState } from "react";
import { PersistantList, useStorage } from "@hooks/index";
import { List, Button } from "react-native-paper";
import { useTranslation } from "react-i18next";
import { styles } from "./lists-accordion.style";
import { View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackParamList } from "navigator";
import { ConfirmDialog } from "@components/index";

type ListsAccordionProps = {
	collection: PersistantList[];
	navigation: StackNavigationProp<StackParamList, "MyLists">;
};

const ListsAccordion: FunctionComponent<ListsAccordionProps> = ({
	collection,
	navigation,
}) => {
	const [dialogOpen, setDialogOpen] = useState(false);
	const [action, setAction] = useState<"import" | "delete">("import");
	const [listToHandle, setListToHandle] = useState<PersistantList>(
		collection[0],
	);

	const { t } = useTranslation();
	const { remove } = useStorage();

	const handle = (act: "import" | "delete", list: PersistantList) => {
		setListToHandle(list);
		setAction(act);
		setDialogOpen(true);
	};

	const confirmAction = (_action: string) => {
		if (_action === "import") {
			navigation.navigate("Start", { imported: listToHandle });
		} else {
			remove("list", listToHandle.name);
		}
		setDialogOpen(false);
	};

	const closeDialog = (): void => {
		setDialogOpen(false);
	};

	return (
		<>
			<ConfirmDialog
				onConfirm={() => confirmAction(action)}
				onDismiss={closeDialog}
				isVisible={dialogOpen}
				text={t(`MY_LISTS.${action}_dialog`)}
			/>
			{collection.map((list) => (
				<List.Accordion
					title={list.name}
					key={list.name}
					left={(props) => (
						<List.Icon {...props} icon="format-list-bulleted" />
					)}>
					{list.collection.map((entry) => (
						<List.Item title={entry} key={entry} style={styles.item} />
					))}
					<View style={styles.buttons}>
						<Button icon="playlist-play" onPress={() => handle("import", list)}>
							{t("MY_LISTS.import_list")}
						</Button>
						<Button icon="delete" onPress={() => handle("delete", list)}>
							{t("MY_LISTS.delete_list")}
						</Button>
					</View>
				</List.Accordion>
			))}
		</>
	);
};

export default ListsAccordion;
