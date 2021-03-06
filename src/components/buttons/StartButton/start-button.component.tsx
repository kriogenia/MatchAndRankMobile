import React, { FunctionComponent } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackParamList } from "navigator";
import { Button, Surface, Caption } from "react-native-paper";
import { systemFactory } from "@model/index";
import { useTranslation } from "react-i18next";
import { styles } from "./start-button.style";
import { useStorage } from "@hooks/index";

type StartButtonProps = {
	list: string[];
	navigation: StackNavigationProp<StackParamList, "Start">;
	reset: React.Dispatch<React.SetStateAction<boolean>>;
	save: boolean;
	saveAs: string;
	systemCode: string;
};

const StartButton: FunctionComponent<StartButtonProps> = ({
	list,
	navigation,
	reset,
	save,
	saveAs,
	systemCode,
}) => {
	const system = systemFactory(systemCode, list, saveAs);
	const { t } = useTranslation();
	const { saveList } = useStorage();

	const goToMatch = () => {
		if (save && saveAs.length !== 0) {
			saveList(list, saveAs);
		}
		navigation.navigate("Match", {
			system: systemFactory(systemCode, list, saveAs),
		});
		reset(false);
	};

	return (
		<>
			{system && (
				<Surface>
					<Caption style={styles.caption}>
						{list.length < 3
							? t("ERROR.minimum_entries")
							: `${t("START.expected_matches")}${system.getExpectedMatches()}`}
					</Caption>
				</Surface>
			)}
			<Button
				mode="contained"
				onPress={goToMatch}
				disabled={saveAs.length === 0 || list.length < 3}>
				{t("START.start")}
			</Button>
		</>
	);
};

export default StartButton;
