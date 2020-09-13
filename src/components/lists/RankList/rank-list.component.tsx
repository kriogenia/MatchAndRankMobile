import React, { FunctionComponent } from "react";
import { Entry } from "@model/index";
import { List, useTheme } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import ViewShot from "react-native-view-shot";
import { getStyles } from "./rank-list.style";

type RankListProps = {
	results: Entry[];
	setCapture: React.Dispatch<React.SetStateAction<string>>;
};

const RankList: FunctionComponent<RankListProps> = ({
	results,
	setCapture,
}) => {
	let counter = 0;
	const theme = useTheme();
	const styles = getStyles(theme);

	const capture = (uri: string) => {
		setCapture(uri);
	};

	return (
		<ScrollView
			contentContainerStyle={styles.layout}
			indicatorStyle={theme.dark ? "white" : "black"}
			persistentScrollbar={true}>
			<ViewShot onCapture={capture} captureMode="mount">
				{results.map((entry) => (
					<List.Item
						key={entry.name}
						title={entry.name}
						style={++counter % 2 === 0 ? styles.evenItem : styles.oddItem}
						titleStyle={styles.title}
					/>
				))}
			</ViewShot>
		</ScrollView>
	);
};

export default RankList;
