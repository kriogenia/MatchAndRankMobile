import React, { Dispatch, FunctionComponent } from "react";
import { View } from "react-native";
import { ClearButton, ImportButton, LoadButton } from "@components/index";
import { styles } from "./start-options.styles";
import { Surface } from "react-native-paper";

type StartOptionsProps = {
	setList: Dispatch<React.SetStateAction<string[]>>;
};

const StartOptions: FunctionComponent<StartOptionsProps> = ({ setList }) => {
	return (
		<Surface style={styles.layout}>
			<ImportButton />
			<LoadButton />
			<ClearButton setList={setList} />
		</Surface>
	);
};

export default StartOptions;
