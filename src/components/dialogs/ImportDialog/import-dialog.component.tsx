import React, { FunctionComponent, useState } from "react";
import { Portal, Dialog, TextInput, Button } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import { useTranslation } from "react-i18next";
import { PersistantList } from "@hooks/index";

type ImportDialogProps = {
	isVisible: boolean;
	onDismiss: () => void;
	setAlert: React.Dispatch<React.SetStateAction<string>>;
	setName: React.Dispatch<React.SetStateAction<string>>;
	setList: React.Dispatch<React.SetStateAction<string[]>>;
};

const ImportDialog: FunctionComponent<ImportDialogProps> = ({
	isVisible,
	onDismiss,
	setAlert,
	setName,
	setList,
}) => {
	const [input, setInput] = useState("");

	const { t } = useTranslation();

	const handleImport = () => {
		try {
			let imported: PersistantList = JSON.parse(input);
			setList(imported.collection);
			setName(imported.name);
		} catch (error) {
			setAlert(t("ERROR.import_list"));
		} finally {
			onDismiss();
		}
	};

	return (
		<Portal>
			<Dialog visible={isVisible} onDismiss={onDismiss}>
				<Dialog.Content>
					<ScrollView>
						<TextInput
							placeholder={t("START.copy_exported_list")}
							onChangeText={(_input) => setInput(_input)}
							mode="outlined"
							multiline
							numberOfLines={10}
						/>
					</ScrollView>
				</Dialog.Content>
				<Dialog.Actions>
					<Button onPress={handleImport}>{t("COMMON.import")}</Button>
					<Button onPress={onDismiss}>{t("COMMON.cancel")}</Button>
				</Dialog.Actions>
			</Dialog>
		</Portal>
	);
};

export default ImportDialog;
