import React, { FunctionComponent } from "react";
import { Button } from "react-native-paper";
import { useTranslation } from "react-i18next";

const TemplateButton: FunctionComponent = () => {
	const { t } = useTranslation();

	return <Button mode="contained">{t("START.template")}</Button>;
};

export default TemplateButton;
