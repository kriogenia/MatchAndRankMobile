import React, { FunctionComponent } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackParamList } from "navigator";
import { Button, Surface, Caption } from "react-native-paper";
import { systemFactory } from "@model/index";
import { useTranslation } from "react-i18next";
import { styles } from "./start-button.style";

type StartButtonProps = {
	list: string[];
	navigation: StackNavigationProp<StackParamList, "Start">;
	saveAs: string | undefined;
	systemCode: string;
};

const StartButton: FunctionComponent<StartButtonProps> = ({
	list,
	navigation,
	saveAs,
	systemCode,
}) => {
	const system = systemFactory(systemCode, list);
	const { t } = useTranslation();

	const goToMatch = () => {
		if (saveAs !== undefined && saveAs.length !== 0) {
			console.log("SAVE LIST AS: " + saveAs);
			//TODO
		}
		navigation.navigate("Start");
	};

	return (
		<>
			{system && (
				<Surface>
					<Caption style={styles.caption}>
						{`${t("START.expected_matches")}${system.getExpectedMatches()}`}
					</Caption>
				</Surface>
			)}
			<Button
				mode="contained"
				onPress={goToMatch}
				disabled={saveAs !== undefined && saveAs.length === 0}>
				{t("START.start")}
			</Button>
		</>
	);
};

export default StartButton;
