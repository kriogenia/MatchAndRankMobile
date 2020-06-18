import React, { FunctionComponent } from "react";
import { Button, useTheme } from "react-native-paper";
import { styles } from "./match-button.style";

type MatchButtonProps = {
	id: string;
	vote: (id: string) => void;
};

const MatchButton: FunctionComponent<MatchButtonProps> = ({
	children,
	id,
	vote,
}) => {
	const { colors } = useTheme();

	const getColor = (): string => {
		if (id === "a") return colors.primary;
		if (id === "b") return colors.accent;
		if (id === "draw") return colors.disabled;
		return "";
	};

	return (
		<Button
			color={getColor()}
			contentStyle={styles.innerText}
			mode="contained"
			onPress={() => vote(id)}
			style={styles.button}>
			{children}
		</Button>
	);
};

export default MatchButton;
