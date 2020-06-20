import React, { FunctionComponent, useState } from "react";
import { useTranslation } from "react-i18next";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackParamList } from "navigator";
import { Button } from "react-native-paper";
import { ConfirmDialog } from "@components/dialogs";

type RestartButtonProps = {
	navigation: StackNavigationProp<StackParamList, "Rank">;
};

const RestartButton: FunctionComponent<RestartButtonProps> = ({
	navigation,
}) => {
	const [dialogOpen, setDialogOpen] = useState(false);

	const { t } = useTranslation();

	const handleRestart = () => {
		setDialogOpen(false);
		navigation.navigate("Start");
	};

	const closeDialog = (): void => {
		setDialogOpen(false);
	};

	return (
		<>
			<ConfirmDialog
				onConfirm={handleRestart}
				onDismiss={closeDialog}
				isVisible={dialogOpen}
				text={t(`RANK.confirm_restart`)}
			/>
			<Button mode="contained" onPress={() => setDialogOpen(true)}>
				{t("RANK.restart")}
			</Button>
		</>
	);
};

export default RestartButton;
