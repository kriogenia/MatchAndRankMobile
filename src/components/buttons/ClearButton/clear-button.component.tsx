import React, { Dispatch, FunctionComponent } from "react";
import { Button } from "react-native-paper";
import { useTranslation } from "react-i18next";

type ClearButtonProps = {
	setList: Dispatch<React.SetStateAction<string[]>>;
};

const ClearButton: FunctionComponent<ClearButtonProps> = ({ setList }) => {
	const { t } = useTranslation();

	const handleClear = (): void => {
		setList([]);
	};

	return (
		<Button onPress={handleClear} mode="contained">
			{t("START.clear")}
		</Button>
	);
};

export default ClearButton;
