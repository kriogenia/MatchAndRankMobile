import React, { FunctionComponent } from "react";
import { View } from "react-native";
import { ActivityIndicator, Caption } from "react-native-paper";
import { styles } from "./load-view.style";

type LoadViewProps = {
	text?: string;
};

const LoadView: FunctionComponent<LoadViewProps> = ({ text }) => {
	return (
		<View style={styles.layout}>
			<ActivityIndicator size="large" />
			{text && <Caption style={styles.text}>{text}</Caption>}
		</View>
	);
};

export default LoadView;
