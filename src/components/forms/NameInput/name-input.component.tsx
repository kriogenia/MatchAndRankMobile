import React, { FunctionComponent } from "react";
import { TextInput, Surface, Caption } from "react-native-paper";
import { View } from "react-native";
import { useTranslation } from "react-i18next";
import { styles } from "./name-input.style";

type NameInputProps = {
	name: string;
	setName: React.Dispatch<React.SetStateAction<string>>;
};

const NameInput: FunctionComponent<NameInputProps> = ({ name, setName }) => {
	const { t } = useTranslation();

	return (
		<Surface style={styles.layout}>
			<View style={styles.textfield_area}>
				<TextInput
					value={name}
					label={t("START.name")}
					onChangeText={(input) => setName(input)}
					style={styles.textfield}
				/>
			</View>
			{name?.length === 0 && (
				<View style={styles.textfield_area}>
					<Caption>{t("ERROR.save_file_name")}</Caption>
				</View>
			)}
		</Surface>
	);
};

export default NameInput;
