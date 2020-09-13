import React, { Dispatch, FunctionComponent } from "react";
import { ClearButton, ImportButton, LoadButton } from "@components/index";
import { styles } from "./start-options.styles";
import { Surface } from "react-native-paper";

type StartOptionsProps = {
	setAlert: Dispatch<React.SetStateAction<string>>;
	setList: Dispatch<React.SetStateAction<string[]>>;
	setName: Dispatch<React.SetStateAction<string>>;
};

const StartOptions: FunctionComponent<StartOptionsProps> = ({
	setAlert,
	setList,
	setName,
}) => {
	return (
		<Surface style={styles.layout}>
			<ImportButton setAlert={setAlert} setList={setList} setName={setName} />
			<LoadButton setList={setList} setName={setName} />
			<ClearButton setList={setList} />
		</Surface>
	);
};

export default StartOptions;
