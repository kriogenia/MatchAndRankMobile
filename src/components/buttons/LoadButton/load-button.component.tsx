import React, { FunctionComponent } from "react";
import { Button } from "react-native-paper";
import { useTranslation } from "react-i18next";

const LoadButton: FunctionComponent = () => {
	const { t } = useTranslation();

	return (
		<Button icon="cloud-download-outline" mode="contained">
			{t("START.load")}
		</Button>
	);
};

export default LoadButton;
