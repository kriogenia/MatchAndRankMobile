import { StyleSheet } from "react-native";
import { Theme } from "react-native-paper";

export const getStyles = ({ colors }: Theme) => {
	const item = {
		marginTop: 2,
		marginHorizontal: 10,
	};

	return StyleSheet.create({
		layout: {
			paddingBottom: 50,
		},
		evenItem: {
			...item,
			backgroundColor: colors.accent,
		},
		oddItem: {
			...item,
			backgroundColor: colors.primary,
		},
		title: {
			fontWeight: "bold",
		},
	});
};
