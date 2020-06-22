import React, { FunctionComponent, useState } from "react";
import { Portal, Dialog } from "react-native-paper";
import { SavedListsSection } from "./lists-section.component";
import { styles } from "./load-dialog.style";
import { TemplatesSection } from "./templates-section.component";
import { ScrollView } from "react-native-gesture-handler";

type LoadDialogProps = {
	isVisible: boolean;
	onDismiss: () => void;
	setName: React.Dispatch<React.SetStateAction<string>>;
	setList: React.Dispatch<React.SetStateAction<string[]>>;
};

const LoadDialog: FunctionComponent<LoadDialogProps> = ({
	onDismiss,
	isVisible,
	setName,
	setList,
}) => {
	const [section, setSection] = useState<"saved" | "templates">("saved");

	const handleLoad = (list: string[], name: string): void => {
		setName(name);
		setList(list);
		onDismiss();
	};

	return (
		<Portal>
			<Dialog visible={isVisible} onDismiss={onDismiss}>
				<Dialog.Content>
					<ScrollView style={styles.list}>
						<SavedListsSection
							handleLoad={handleLoad}
							open={section === "saved"}
							setSection={setSection}
						/>
						<TemplatesSection
							handleLoad={handleLoad}
							open={section === "templates"}
							setSection={setSection}
						/>
					</ScrollView>
				</Dialog.Content>
			</Dialog>
		</Portal>
	);
};

export default LoadDialog;
