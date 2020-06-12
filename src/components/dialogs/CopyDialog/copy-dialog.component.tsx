import React, { FunctionComponent } from "react";
import { Portal, Dialog, Paragraph, Button, Surface } from "react-native-paper";
import { useTranslation } from "react-i18next";
import { ScrollView } from "react-native-gesture-handler";
import Clipboard from "@react-native-community/clipboard";
import { Entry } from "@model/index";
import { styles } from "./copy-dialog.style";

type CopyDialogProps = {
	name: string;
	isVisible: boolean;
	onDismiss: () => void;
	result: Entry[];
};

const CopyDialog: FunctionComponent<CopyDialogProps> = ({
	name,
	onDismiss,
	isVisible,
	result,
}) => {
	const { t } = useTranslation();

	const handleConfirm = () => {
		Clipboard.setString(string);
		onDismiss();
	};

	let counter = 0;
	const string =
		`${t("RANK.rank_of")} ${name}:\n` +
		result.map((entry) => `${++counter}. ${entry.name}`).join("\n");

	return (
		<Portal>
			<Dialog visible={isVisible} onDismiss={onDismiss}>
				<Dialog.Title>{t("RANK.copy_to_clipboard")}</Dialog.Title>
				<Dialog.Content>
					<Surface>
						<ScrollView>
							<Paragraph style={styles.text}>{string}</Paragraph>
						</ScrollView>
					</Surface>
				</Dialog.Content>
				<Dialog.Actions>
					<Button onPress={handleConfirm}>{t("COMMON.copy")}</Button>
					<Button onPress={onDismiss}>{t("COMMON.cancel")}</Button>
				</Dialog.Actions>
			</Dialog>
		</Portal>
	);
};

export default CopyDialog;
