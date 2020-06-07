import React, { FunctionComponent } from "react";
import { View, TextInput as ReactTextInput } from "react-native";
import { Button, TextInput, List, TouchableRipple } from "react-native-paper";
import { useTranslation } from "react-i18next";
import { styles } from "./entries-list.styles";
import { ScrollView } from "react-native-gesture-handler";

type EntriesListProps = {
	alert: React.Dispatch<React.SetStateAction<string>>;
	list: string[];
	setList: React.Dispatch<React.SetStateAction<string[]>>;
};

const EntriesList: FunctionComponent<EntriesListProps> = ({
	alert,
	list,
	setList,
}) => {
	const [input, setInput] = React.useState("");

	const { t } = useTranslation();

	let counter = 0;
	let textInput: ReactTextInput | null = null;

	const handleAdd = () => {
		if (input) {
			if (list.map((entry) => entry).includes(input)) {
				alert(t("ERROR.duplicated_entry"));
			} else {
				let entry = input;
				setInput("");
				setList([...list, entry]);
				textInput?.focus;
			}
		}
	};

	const handleChange = (value: string) => {
		setInput(value);
	};

	const handleDelete = (id: string) =>
		setList((_list) => _list.filter((ex) => ex !== id));

	return (
		<>
			<View style={styles.layout}>
				<TextInput
					dense
					label="Add"
					onChangeText={handleChange}
					onSubmitEditing={handleAdd}
					style={styles.textfield}
					value={input}
					ref={(_input) => {
						textInput = _input;
					}}
					blurOnSubmit={false}
				/>
				<Button
					compact
					mode="contained"
					icon="plus"
					onPress={handleAdd}
					style={styles.button}
				/>
			</View>
			<ScrollView>
				{list.map((entry) => (
					<List.Item
						key={entry}
						title={`${++counter}. ${entry}`}
						style={styles.item}
						right={(props) => (
							<TouchableRipple onPress={() => handleDelete(entry)}>
								<List.Icon {...props} icon="delete" />
							</TouchableRipple>
						)}
					/>
				))}
			</ScrollView>
		</>
	);
};

export default EntriesList;
