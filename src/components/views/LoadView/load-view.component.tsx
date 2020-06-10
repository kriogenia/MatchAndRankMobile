import React, { FunctionComponent } from "react";
import { View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { styles } from "./load-view.style";

const LoadView: FunctionComponent = () => {
	return (
		<View style={styles.layout}>
			<ActivityIndicator size="large" />
		</View>
	);
};

export default LoadView;
