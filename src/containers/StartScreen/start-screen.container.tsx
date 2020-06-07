import React, { useEffect, useState, FunctionComponent } from "react";
import { View } from "react-native";
import { styles } from "./start-screen.styles";
import StartOptions from "./Options/start-options.container";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackParamList } from "navigator";
import { UserContextConsumer, UserContext } from "@hooks/index";
import { AuthButton, EntriesList, AlertDialog } from "@components/index";

let backuplist: string[] = [];
//let backupsystem: string = "s";

type StartScreenProps = {
	navigation: StackNavigationProp<StackParamList, "Start">;
};

const StartScreen: FunctionComponent<StartScreenProps> = ({}) => {
	const [list, setList] = useState(backuplist);
	//const [system, setSystem] = useState(backupsystem);
	const [alertText, setAlertText] = useState("");

	useEffect(() => {
		backuplist = [...list];
		//backupsystem = system;
	}, [list /*, system*/]);

	return (
		<View style={styles.layout}>
			<UserContextConsumer>
				{(context: UserContext | undefined) =>
					context &&
					(context.userInfo ? (
						<>
							<StartOptions setList={setList} />
							<EntriesList list={list} setList={setList} alert={setAlertText} />
						</>
					) : (
						/*	<SystemPicker setSystem={setSystem} />
						<StartButton list={list} systemCode={system} navigation={navigation}/> */
						<AuthButton context={context} />
					))
				}
			</UserContextConsumer>
			<AlertDialog alertText={alertText} setAlertText={setAlertText} />
		</View>
	);
};

export default StartScreen;
