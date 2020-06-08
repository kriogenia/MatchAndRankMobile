import React, { useEffect, useState, FunctionComponent } from "react";
import { View } from "react-native";
import { styles } from "./start-screen.styles";
import StartOptions from "./Options/start-options.container";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackParamList } from "navigator";
import { UserContextConsumer, UserContext } from "@hooks/index";
import {
	AuthButton,
	EntriesList,
	AlertDialog,
	SystemPicker,
	NextButton,
	StartButton,
} from "@components/index";

let backuplist: string[] = [];
let backupsystem: string = "s";

type StartScreenProps = {
	navigation: StackNavigationProp<StackParamList, "Start">;
};

const StartScreen: FunctionComponent<StartScreenProps> = ({navigation}) => {
	const [list, setList] = useState(backuplist);
	const [system, setSystem] = useState(backupsystem);
	const [alertText, setAlertText] = useState("");
	const [showSystem, setShowSystem] = useState(false);

	useEffect(() => {
		backuplist = [...list];
		backupsystem = system;
	}, [list, system]);

	return (
		<View style={styles.layout}>
			<UserContextConsumer>
				{(context: UserContext | undefined) =>
					context &&
					(context.userInfo ? (
						<>
							<StartOptions setList={setList} />
							<EntriesList list={list} setList={setList} alert={setAlertText} />
							{showSystem && <SystemPicker setSystem={setSystem} />}
							{showSystem ? (
								<StartButton
									list={list}
									systemCode={system}
									navigation={navigation}
								/>
							) : (
								<NextButton
									condition={list.length < 3}
									onPress={() => setShowSystem(true)}
								/>
							)}
						</>
					) : (
						<AuthButton context={context} />
					))
				}
			</UserContextConsumer>
			<AlertDialog alertText={alertText} setAlertText={setAlertText} />
		</View>
	);
};

export default StartScreen;
