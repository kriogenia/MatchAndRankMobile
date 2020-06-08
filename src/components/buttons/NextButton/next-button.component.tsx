import React, { FunctionComponent } from "react";
import { Button, Caption } from "react-native-paper";
import { useTranslation } from "react-i18next";
import { styles } from "./next-button.style";

type NextButtonProps = {
	condition: boolean;
	onPress: () => void;
};

const NextButton: FunctionComponent<NextButtonProps> = ({
	condition,
	onPress,
}) => {
	const { t } = useTranslation();

	return (
		<>
			{condition && (
				<Caption style={styles.caption}>{t("ERROR.minimum_entries")}</Caption>
			)}
			<Button mode="contained" disabled={condition} onPress={onPress}>
				{t("COMMON.next")}
			</Button>
		</>
	);
};

export default NextButton;
