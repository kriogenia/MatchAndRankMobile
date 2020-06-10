import React, { FunctionComponent } from "react";
import { Snackbar } from "react-native-paper";
import { useTranslation } from "react-i18next";

type AlertDialogProps = {
	alertText: string;
	setAlertText: React.Dispatch<React.SetStateAction<string>>;
};

const AlertDialog: FunctionComponent<AlertDialogProps> = ({
	alertText,
	setAlertText,
}) => {
	const { t } = useTranslation();

	return (
		<Snackbar
			visible={alertText.length > 0}
			onDismiss={() => setAlertText("")}
			action={{
				label: t("COMMON.close"),
				onPress: () => setAlertText(""),
			}}>
			{alertText}
		</Snackbar>
	);
};

export default AlertDialog;
