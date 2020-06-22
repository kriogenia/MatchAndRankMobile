import React, { FunctionComponent } from "react";
import { Button, List, TouchableRipple } from "react-native-paper";
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import { templates } from "@rsc/index";
import { styles } from "./load-dialog.style";

type TemplatesSectionProps = {
	handleLoad: (list: string[], name: string) => void;
	open: boolean;
	setSection: React.Dispatch<React.SetStateAction<"saved" | "templates">>;
};

export const TemplatesSection: FunctionComponent<TemplatesSectionProps> = ({
	handleLoad,
	open,
	setSection,
}) => {
	const { t } = useTranslation();

	return (
		<View style={styles.templates}>
			<Button
				onPress={() => setSection("templates")}
				mode="contained"
				style={styles.buttons}>
				{t("START.templates")}
			</Button>
			{open &&
				templates.map((list) => (
					<List.Item
						title={list.name}
						key={list.name}
						right={(props) => (
							<TouchableRipple
								onPress={() => handleLoad(list.collection, list.name)}>
								<List.Icon {...props} icon="play" />
							</TouchableRipple>
						)}
					/>
				))}
		</View>
	);
};
