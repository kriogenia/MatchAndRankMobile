import React, { FunctionComponent, useState } from "react";
import { Button } from "react-native-paper";
import { useTranslation } from "react-i18next";
import { LoadDialog } from "@components/dialogs";

type LoadButtonProps = {
	setList: React.Dispatch<React.SetStateAction<string[]>>;
	setName: React.Dispatch<React.SetStateAction<string>>;
};

const LoadButton: FunctionComponent<LoadButtonProps> = ({
	setList,
	setName,
}) => {
	const [isVisible, setIsVisible] = useState(false);

	const { t } = useTranslation();

	return (
		<>
			<LoadDialog
				isVisible={isVisible}
				onDismiss={() => setIsVisible(false)}
				setName={setName}
				setList={setList}
			/>
			<Button
				icon="cloud-download-outline"
				mode="contained"
				onPress={() => setIsVisible((prev) => !prev)}>
				{t("START.load")}
			</Button>
		</>
	);
};

export default LoadButton;
