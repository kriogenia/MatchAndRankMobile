import React, { useEffect, useState, FunctionComponent } from "react";
import StartOptions from "./Options/start-options.container";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackParamList } from "navigator";
import {
	EntriesList,
	SystemPicker,
	NextButton,
	StartButton,
	SaveSwitch,
	NameInput,
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
	const [save, setSave] = useState(false);
	const [name, setName] = useState("");

	useEffect(() => {
		backuplist = [...list];
		backupsystem = system;
	}, [list, system]);

	return (
		<>
			<StartOptions setList={setList} />
			<EntriesList list={list} setList={setList} alert={setAlert} />
			{showSystem ? (
				<>
					<NameInput name={name} setName={setName} />
					<SystemPicker setSystem={setSystem} length={list.length} />
					<SaveSwitch save={save} setSave={setSave} />
					<StartButton
						list={list}
						systemCode={system}
						navigation={navigation}
						save={save}
						saveAs={name}
						reset={setShowSystem}
					/>
				</>
			) : (
				<NextButton
					condition={list.length < 3}
					onPress={() => setShowSystem(true)}
				/>
			)}
		</>
	);
};
