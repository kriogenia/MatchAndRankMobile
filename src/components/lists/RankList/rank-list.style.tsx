import { StyleSheet } from "react-native";
import { Theme } from "react-native-paper";

export const getStyles = ({ colors }: Theme) => {
	const item = {
		marginTop: 2,
		marginHorizontal: 10,
	};

	return StyleSheet.create({
		oddItem: {
			...item,
			backgroundColor: colors.primary,
		},
		evenItem: {
			...item,
			backgroundColor: colors.accent,
		},
		title: {
			fontWeight: "bold",
		},
	});
};
