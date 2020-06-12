import React, { FunctionComponent, useState } from "react";
import { Entry } from "@model/index";
import { styles } from "./rank-header.style";
import { View } from "react-native";
import { Title, IconButton } from "react-native-paper";
import { CopyDialog } from "@components/dialogs";

type RankHeaderProps = {
	name: string;
	result: Entry[];
};

const RankHeader: FunctionComponent<RankHeaderProps> = ({ name, result }) => {
	const [copyDialog, showCopyDialog] = useState(false);

	return (
		<View style={styles.layout}>
			<View style={styles.text}>
				<Title style={styles.title}>{name}</Title>
			</View>
			<IconButton
				icon="content-copy"
				onPress={() => showCopyDialog(true)}
				style={styles.button}
			/>
			<IconButton style={styles.button} icon="share-variant" />
			<CopyDialog
				name={name}
				isVisible={copyDialog}
				onDismiss={() => showCopyDialog(false)}
				result={result}
			/>
		</View>
	);
};

export default RankHeader;
