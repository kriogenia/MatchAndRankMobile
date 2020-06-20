import React, { FunctionComponent } from "react";
import { Portal, Dialog, Paragraph, Button } from "react-native-paper";
import { useTranslation } from "react-i18next";

type ConfirmDialogProps = {
	onConfirm: () => void;
	onDismiss: () => void;
	isVisible: boolean;
	text: string;
};

const ConfirmDialog: FunctionComponent<ConfirmDialogProps> = ({
	onConfirm,
	onDismiss,
	isVisible,
	text,
}) => {
	const { t } = useTranslation();

	return (
		<Portal>
			<Dialog visible={isVisible} onDismiss={onDismiss}>
				<Dialog.Title>{t("COMMON.confirm")}</Dialog.Title>
				<Dialog.Content>
					<Paragraph>{text}</Paragraph>
				</Dialog.Content>
				<Dialog.Actions>
					<Button onPress={onConfirm}>{t("COMMON.ok")}</Button>
					<Button onPress={onDismiss}>{t("COMMON.cancel")}</Button>
				</Dialog.Actions>
			</Dialog>
		</Portal>
	);
};

export default ConfirmDialog;
