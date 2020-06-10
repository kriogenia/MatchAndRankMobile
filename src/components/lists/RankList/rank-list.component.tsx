import React, { FunctionComponent } from "react";
import { Entry } from "@model/index";
import { List, useTheme } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import { getStyles } from "./rank-list.style";

type RankListProps = {
	results: Entry[];
};

const RankList: FunctionComponent<RankListProps> = ({ results }) => {
	let counter = 0;
	const theme = useTheme();
	const styles = getStyles(theme);

	return (
		<ScrollView
			contentContainerStyle={styles.layout}
			indicatorStyle={theme.dark ? "white" : "black"}
			persistentScrollbar={true}>
			{results.map((entry) => (
				<List.Item
					key={entry.name}
					title={entry.name}
					style={++counter % 2 === 0 ? styles.evenItem : styles.oddItem}
					titleStyle={styles.title}
				/>
			))}
		</ScrollView>
	);
};

export default RankList;
