import React, { FunctionComponent } from "react";
import { Surface, Caption, Switch, TouchableRipple } from "react-native-paper";
import { View } from "react-native";
import { useTranslation } from "react-i18next";
import { styles } from "./save-switch.style";

type SaveSwitchProps = {
	save: boolean;
	setSave: React.Dispatch<React.SetStateAction<boolean>>;
};

const SaveSwitch: FunctionComponent<SaveSwitchProps> = ({ save, setSave }) => {
	const { t } = useTranslation();

	return (
		<Surface style={styles.layout}>
			<View style={styles.switch}>
				<Caption>{t("START.save_list")}</Caption>
				<TouchableRipple onPress={() => setSave((prev) => !prev)}>
					<View pointerEvents="none">
						<Switch value={save} />
					</View>
				</TouchableRipple>
			</View>
		</Surface>
	);
};

export default SaveSwitch;
