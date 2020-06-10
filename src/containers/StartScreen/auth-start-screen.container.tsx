import React, { useEffect, useState, FunctionComponent } from "react";
import StartOptions from "./Options/start-options.container";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackParamList } from "navigator";
import {
	EntriesList,
	SystemPicker,
	NextButton,
	StartButton,
	ListSaver,
} from "@components/index";

let backuplist: string[] = [];
let backupsystem: string = "f";

type AuthStartScreenProps = {
	navigation: StackNavigationProp<StackParamList, "Start">;
	setAlert: React.Dispatch<React.SetStateAction<string>>;
};

export const AuthStartScreen: FunctionComponent<AuthStartScreenProps> = ({
	navigation,
	setAlert,
}) => {
	const [list, setList] = useState(backuplist);
	const [system, setSystem] = useState(backupsystem);
	const [showSystem, setShowSystem] = useState(false);
	const [saveAs, setSaveAs] = useState<string | undefined>(undefined);

	useEffect(() => {
		backuplist = [...list];
		backupsystem = system;
	}, [list, system]);

	return (
		<>
			<StartOptions setList={setList} />
			<EntriesList list={list} setList={setList} alert={setAlert} />
			{showSystem && <SystemPicker setSystem={setSystem} />}
			{showSystem && <ListSaver saveAs={saveAs} setSaveAs={setSaveAs} />}
			{showSystem ? (
				<StartButton
					list={list}
					systemCode={system}
					navigation={navigation}
					saveAs={saveAs}
				/>
			) : (
				<NextButton
					condition={list.length < 3}
					onPress={() => setShowSystem(true)}
				/>
			)}
		</>
	);
};
