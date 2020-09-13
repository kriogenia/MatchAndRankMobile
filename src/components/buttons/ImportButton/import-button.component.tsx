import React, { FunctionComponent, useState } from "react";
import { Button } from "react-native-paper";
import { useTranslation } from "react-i18next";
import { AlertDialog, ImportDialog } from "@components/dialogs";

type ImportButtonProps = {
	setAlert: React.Dispatch<React.SetStateAction<string>>;
	setList: React.Dispatch<React.SetStateAction<string[]>>;
	setName: React.Dispatch<React.SetStateAction<string>>;
};

const ImportButton: FunctionComponent<ImportButtonProps> = ({
	setAlert,
	setList,
	setName,
}) => {
	const [isVisible, setIsVisible] = useState(false);
1
	const { t } = useTranslation();

	return (
		<>
			<ImportDialog
				isVisible={isVisible}
				onDismiss={() => setIsVisible(false)}
				setAlert={setAlert}
				setName={setName}
				setList={setList}
			/>
			<Button icon="upload" mode="contained" onPress={() => setIsVisible(true)}>
				{t("START.import")}
			</Button>
		</>
	);
};

export default ImportButton;
