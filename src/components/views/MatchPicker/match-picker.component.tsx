import React, { FunctionComponent } from "react";
import { Match } from "@model/index";
import { View } from "react-native";
import { MatchButton } from "@components/index";

type MatchPickerProps = {
	match: Match;
	vote: (id: string) => void;
};

const MatchPicker: FunctionComponent<MatchPickerProps> = ({ match, vote }) => {
	return (
		<View>
			<MatchButton id={"a"} vote={vote}>
				{match.a.name}
			</MatchButton>
			<MatchButton id={"b"} vote={vote}>
				{match.b.name}
			</MatchButton>
		</View>
	);
};

export default MatchPicker;
