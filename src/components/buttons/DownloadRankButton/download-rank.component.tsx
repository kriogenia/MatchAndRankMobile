import React, { FunctionComponent, useState } from "react";
import {
	Alert,
	PermissionsAndroid,
	Platform,
	StyleProp,
	ViewStyle,
} from "react-native";
import { IconButton } from "react-native-paper";
import CameraRoll from "@react-native-community/cameraroll";
import { useTranslation } from "react-i18next";

type DownloadRankButtonProps = {
	tag: string;
	style: StyleProp<ViewStyle>;
};

const DownloadRankButton: FunctionComponent<DownloadRankButtonProps> = ({
	tag,
	style,
}) => {
	const [saving, setSaving] = useState(false);

	const { t } = useTranslation();

	const hasAndroidPermission = async () => {
		const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;

		const hasPermission = await PermissionsAndroid.check(permission);
		if (hasPermission) {
			return true;
		}

		const status = await PermissionsAndroid.request(permission);
		return status === "granted";
	};

	const savePicture = async () => {
		setSaving(true);
		if (Platform.OS === "android" && !(await hasAndroidPermission())) {
			return;
		}
		CameraRoll.save(tag, { type: "photo", album: "MatchAndRank" })
			.then(() => {
				Alert.alert(
					t("RANK.store"),
					t("RANK.store_succesful"),
					[{ text: "OK", onPress: () => console.log("OK Pressed") }],
					{ cancelable: false },
				);
			})
			.catch((err) => {
				Alert.alert(
					t("RANK.store"),
					"Error: " + err.message,
					[{ text: "OK", onPress: () => console.log("OK Pressed") }],
					{ cancelable: false },
				);
			})
			.finally(() => setSaving(false));
	};

	return saving ? (
		<></>
	) : (
		<IconButton
			key="download"
			icon="arrow-down"
			onPress={savePicture}
			style={style}
		/>
	);
};

export default DownloadRankButton;
