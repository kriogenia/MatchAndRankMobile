import React, { FunctionComponent, useState } from "react";
import { Entry } from "@model/index";
import { styles } from "./rank-header.style";
import { View } from "react-native/index";
import { Caption, Title, IconButton } from "react-native-paper";
import { PersistantList } from "@hooks/index";
import { useTranslation } from "react-i18next";
import Share, { Options } from "react-native-share/index";

type RankHeaderProps = {
	name: string;
	result: Entry[];
};

const options = [
	{ key: "rank", icon: "format-list-numbered" },
	{ key: "list", icon: "format-list-bulleted" },
];

const RankHeader: FunctionComponent<RankHeaderProps> = ({ name, result }) => {
	const { t } = useTranslation();

	const list: PersistantList = {
		name: name,
		type: "list",
		collection: result.map((e) => e.name),
	};

	let counter = 0;
	const rankString =
		`${t("RANK.rank_of")} ${name}:\n` +
		result.map((entry) => `${++counter}. ${entry.name}`).join("\n");

	const share = async (key: string) => {
		try {
			const options: Options = {
				message: key === "list" ? JSON.stringify(list) : rankString,
			};
			if (key === "rank") {
				options.url = "";
			}
			await Share.open(options);
		} catch (e) {
			console.error(e);
		}
	};

	return (
		<View style={styles.layout}>
			<View style={styles.text}>
				<Title style={styles.title}>{name}</Title>
			</View>
			<Caption style={styles.button}>{t("RANK.share")}</Caption>
			{options.map((o) => (
				<IconButton
					key={o.key}
					icon={o.icon}
					onPress={() => share(o.key)}
					style={styles.button}
				/>
			))}
		</View>
	);
};

export default RankHeader;
