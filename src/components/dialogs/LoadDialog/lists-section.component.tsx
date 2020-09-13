import React, { FunctionComponent, useState, useEffect } from "react";
import { Button, List, TouchableRipple } from "react-native-paper";
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import { useStorage, PersistantList } from "@hooks/index";
import { LoadView } from "@components/index";
import { styles } from "./load-dialog.style";

type SavedListsSectionProps = {
	handleLoad: (list: string[], name: string) => void;
	open: boolean;
	setSection: React.Dispatch<React.SetStateAction<"saved" | "templates">>;
};

export const SavedListsSection: FunctionComponent<SavedListsSectionProps> = ({
	handleLoad,
	open,
	setSection,
}) => {
	const [lists, setLists] = useState<PersistantList[]>([]);
	const [loading, setLoading] = useState<boolean>(true);

	const { t } = useTranslation();
	const { get } = useStorage();

	useEffect(() => {
		get("list")
			.then((pairs) => {
				const listStrings: PersistantList[] = pairs.map((pair) =>
					pair[1] ? JSON.parse(pair[1]) : undefined,
				);
				setLists(listStrings);
				setLoading(false);
			})
			.catch((e: Error) => {
				console.error(e.message);
			});
	}, [get]);

	return (
		<View>
			<Button
				onPress={() => setSection("saved")}
				mode="contained"
				style={styles.buttons}>
				{t("START.saved_lists")}
			</Button>
			{open &&
				(loading ? (
					<LoadView text={t("MY_LISTS.loading")} />
				) : (
					lists.map((list) => (
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
					))
				))}
		</View>
	);
};
