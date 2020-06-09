import React, { FunctionComponent, useState } from "react";
import {
	Surface,
	Caption,
	Switch,
	TextInput,
	TouchableRipple,
} from "react-native-paper";
import { View } from "react-native";
import { useTranslation } from "react-i18next";
import { styles } from "./list-saver.style";

type ListSaverProps = {
	saveAs: string | undefined;
	setSaveAs: React.Dispatch<React.SetStateAction<string | undefined>>;
};

const ListSaver: FunctionComponent<ListSaverProps> = ({
	saveAs,
	setSaveAs,
}) => {
	const [isOn, setIsOn] = useState(false);

	const { t } = useTranslation();

	const toggleSwitch = () => {
		setSaveAs(isOn ? undefined : "");
		setIsOn((_isOn) => !_isOn);
	};

	return (
		<Surface style={styles.layout}>
			<View style={styles.switch}>
				<Caption>{t("START.save_list")}</Caption>
				<TouchableRipple onPress={toggleSwitch}>
					<View pointerEvents="none">
						<Switch value={isOn} />
					</View>
				</TouchableRipple>
			</View>
			{isOn && (
				<>
					<View style={styles.textfield_area}>
						<TextInput
							value={saveAs}
							label={t("START.save_as")}
							onChangeText={(name) => setSaveAs(name)}
							style={styles.textfield}
						/>
					</View>
					{(!saveAs || saveAs?.length === 0) && (
						<View style={styles.textfield_area}>
							<Caption>{t("ERROR.save_file_name")}</Caption>
						</View>
					)}
				</>
			)}
		</Surface>
	);
};

export default ListSaver;
