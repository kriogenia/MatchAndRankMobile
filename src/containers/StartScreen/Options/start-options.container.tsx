import React, { Dispatch, FunctionComponent } from "react";
import { View } from "react-native";
import { ClearButton, ImportButton, TemplateButton } from "@components/index";
import { styles } from "./start-options.styles";

type StartOptionsProps = {
	setList: Dispatch<React.SetStateAction<string[]>>;
};

const StartOptions: FunctionComponent<StartOptionsProps> = ({ setList }) => {
	return (
		<View style={styles.layout}>
			<ImportButton />
			<TemplateButton />
			<ClearButton setList={setList} />
		</View>
	);
};

export default StartOptions;
