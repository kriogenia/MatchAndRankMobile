import React, { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import { Button, useTheme } from "react-native-paper";
import { Entry } from "@model/index";
import { useStorage } from "@hooks/index";

type SaveRankButtonProps = {
	name: string;
	result: Entry[];
	saved: boolean;
	setSaved: React.Dispatch<React.SetStateAction<boolean>>;
};

const SaveRankButton: FunctionComponent<SaveRankButtonProps> = ({
	name,
	result: result,
	saved,
	setSaved,
}) => {
	const { t } = useTranslation();
	const { saveRanking } = useStorage();
	const { colors } = useTheme();

	const saveRank = () => {
		saveRanking(result, name).then(() => setSaved(true));
	};

	return (
		<>
			{!saved && (
				<Button color={colors.accent} mode="contained" onPress={saveRank}>
					{t("RANK.save")}
				</Button>
			)}
		</>
	);
};

export default SaveRankButton;
