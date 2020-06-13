import React, { FunctionComponent } from "react";
import { Match } from "@model/index";
import { View } from "react-native";
import { MatchButton } from "@components/index";
import { Title } from "react-native-paper";
import { useTranslation } from "react-i18next";
import { styles } from "./match-picker.style";

type MatchPickerProps = {
	draw: boolean;
	match: Match;
	vote: (id: string) => void;
};

const MatchPicker: FunctionComponent<MatchPickerProps> = ({
	draw,
	match,
	vote,
}) => {
	const { t } = useTranslation();

	return (
		<View>
			<MatchButton id={"a"} vote={vote}>
				{match.a.name}
			</MatchButton>
			{draw ? (
				<MatchButton id={"draw"} vote={vote}>
					{t("MATCH.draw")}
				</MatchButton>
			) : (
				<View style={styles.vs}>
					<Title>vs</Title>
				</View>
			)}
			<MatchButton id={"b"} vote={vote}>
				{match.b.name}
			</MatchButton>
		</View>
	);
};

export default MatchPicker;
