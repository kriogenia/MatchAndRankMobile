import React, { FunctionComponent } from "react";
import { Button } from "react-native-paper";
import { useTranslation } from "react-i18next";

const ImportButton: FunctionComponent = () => {
	const { t } = useTranslation();

	return <Button icon="upload" mode="contained">{t("START.import")}</Button>;
};

export default ImportButton;
