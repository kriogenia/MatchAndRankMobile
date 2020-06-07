import React, { Dispatch, FunctionComponent, useState } from "react";
import { Button } from "react-native-paper";
import { useTranslation } from "react-i18next";
import { ConfirmDialog } from "@components/dialogs";

type ClearButtonProps = {
	setList: Dispatch<React.SetStateAction<string[]>>;
};

const ClearButton: FunctionComponent<ClearButtonProps> = ({ setList }) => {
	const [dialogOpen, setDialogOpen] = useState(false);

	const { t } = useTranslation();

	const handleClear = (): void => {
		setList([]);
		setDialogOpen(false);
	};

	const closeDialog = (): void => {
		setDialogOpen(false);
	};

	const openDialog = (): void => {
		setDialogOpen(true);
	};

	return (
		<>
			<ConfirmDialog
				onConfirm={handleClear}
				onDismiss={closeDialog}
				isVisible={dialogOpen}
				text={t("ERROR.confirm_clear")}
			/>
			<Button onPress={openDialog} mode="contained">
				{t("START.clear")}
			</Button>
		</>
	);
};

export default ClearButton;
