import React, { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackParamList } from "navigator";
import { Button } from "react-native-paper";

type RestartButtonProps = {
	navigation: StackNavigationProp<StackParamList, "Rank">;
};

const RestartButton: FunctionComponent<RestartButtonProps> = ({
	navigation,
}) => {
	const { t } = useTranslation();

	const handleRestart = () => {
		// alert?
		navigation.navigate("Start");
	};

	return (
		<Button mode="contained" onPress={handleRestart}>
			{t("RANK.restart")}
		</Button>
	);
};

export default RestartButton;
