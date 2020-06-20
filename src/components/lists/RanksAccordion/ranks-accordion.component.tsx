import React, { FunctionComponent, useState } from "react";
import { useStorage, PersistantRank } from "@hooks/index";
import { List, Button } from "react-native-paper";
import { useTranslation } from "react-i18next";
import { styles } from "./ranks-accordion.style";
import { View } from "react-native";
import { ConfirmDialog } from "@components/index";
import Clipboard from "@react-native-community/clipboard";

type RanksAccordionProps = {
	collection: PersistantRank[];
};

const RanksAccordion: FunctionComponent<RanksAccordionProps> = ({
	collection,
}) => {
	const [dialogOpen, setDialogOpen] = useState(false);
	const [rankToHandle, setRankToHandle] = useState<PersistantRank>(
		collection[0],
	);

	const { t } = useTranslation();
	const { remove } = useStorage();

	const handleCopy = (rank: PersistantRank) => {
		const string =
			`${t("RANK.rank_of")} ${rank.name}:\n` +
			rank.collection.map((e) => `${e.position}. ${e.entry}`).join("\n");
		Clipboard.setString(string);
	};

	const handleDelete = (rank: PersistantRank) => {
		setRankToHandle(rank);
		setDialogOpen(true);
	};

	const confirmAction = () => {
		remove("rank", rankToHandle.name);
		setDialogOpen(false);
	};

	const closeDialog = (): void => {
		setDialogOpen(false);
	};

	return (
		<>
			<ConfirmDialog
				onConfirm={() => confirmAction()}
				onDismiss={closeDialog}
				isVisible={dialogOpen}
				text={t(`MY_RANKS.delete_dialog`)}
			/>
			{collection.map((rank) => (
				<List.Accordion
					title={rank.name}
					key={rank.name}
					left={(props) => (
						<List.Icon {...props} icon="format-list-numbered" />
					)}>
					{rank.collection.map((e) => (
						<List.Item
							title={`${e.position}. ${e.entry}`}
							key={e.entry}
							style={styles.item}
						/>
					))}
					<View style={styles.buttons}>
						<Button icon="content-copy" onPress={() => handleCopy(rank)}>
							{t("MY_RANKS.copy_rank")}
						</Button>
						<Button icon="delete" onPress={() => handleDelete(rank)}>
							{t("MY_RANKS.delete_rank")}
						</Button>
					</View>
				</List.Accordion>
			))}
		</>
	);
};

export default RanksAccordion;
