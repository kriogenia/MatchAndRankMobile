import React, { FunctionComponent, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
	Surface,
	Button,
	Caption,
	TouchableRipple,
	Switch,
} from "react-native-paper";
import { View } from "react-native";
import { styles } from "./system-picker.style";

type SystemPickerProps = {
	setSystem: React.Dispatch<React.SetStateAction<string>>;
};

let backupSelected = "free4all";
let backupChecked = false;

const SystemPicker: FunctionComponent<SystemPickerProps> = ({ setSystem }) => {
	const [selected, setSelected] = useState(backupSelected);
	const [checked, setChecked] = useState(backupChecked);

	const { t } = useTranslation();

	useEffect(() => {
		setSystem(`${selected === "free4all" ? "f" : "q"}${checked ? "d" : ""}`);
	}, [selected, checked, setSystem]);

	const handleCheck = () => {
		backupChecked = !checked;
		setChecked(backupChecked);
	};

	const handleSelect = (option: string) => {
		backupSelected = option;
		setSelected(backupSelected);
	};

	const options = ["free4all", "quick"];

	return (
		<Surface>
			<View style={styles.buttonGroup}>
				{options.map((o) => (
					<Button
						icon={o === "free4all" ? "google-circles-extended" : "fast-forward"}
						mode={selected === o ? "contained" : "outlined"}
						onPress={() => handleSelect(o)}
						key={o}>
						{t(`START.options.${o}`)}
					</Button>
				))}
			</View>
			<View style={styles.buttonGroup}>
				<Caption>{t("START.options.allow_draw")}</Caption>
				<TouchableRipple onPress={handleCheck}>
					<View pointerEvents="none">
						<Switch value={checked} />
					</View>
				</TouchableRipple>
			</View>
		</Surface>
	);
};

export default SystemPicker;
