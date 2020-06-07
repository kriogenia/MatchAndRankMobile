import React, { useState, useEffect, FunctionComponent } from "react";
import { View, ActivityIndicator } from "react-native";
import {
	GoogleSignin,
	GoogleSigninButton,
	statusCodes,
} from "react-native-google-signin";
import { webClientId } from "../../../../private.config";
import { useTranslation } from "react-i18next";
import { UserConsumerProps } from "@hooks/index";
import { styles } from "./auth-button.style";
import { Caption } from "react-native-paper";

const AuthButton: FunctionComponent<UserConsumerProps> = ({ context }) => {
	const { userInfo, setUserInfo } = context;
	const [isLogging, setIsLogging] = useState(true);

	const { t } = useTranslation();

	// ComponentDidMount
	useEffect(() => {
		GoogleSignin.configure({
			scopes: ["https://www.googleapis.com/auth/drive.readonly"],
			webClientId: webClientId,
		});
		isSignedIn();
	});

	const isSignedIn = async () => {
		const _isSignedIn = await GoogleSignin.isSignedIn();
		if (_isSignedIn) {
			getCurrentUserInfo();
		}
		setIsLogging(false);
	};

	const getCurrentUserInfo = async () => {
		try {
			const _userInfo = await GoogleSignin.signInSilently();
			setUserInfo ? setUserInfo(_userInfo) : null;
		} catch (error) {
			if (error.code === statusCodes.SIGN_IN_REQUIRED) {
				console.log("User has not signed in yet");
			} else {
				console.log(error.code);
				console.log("Something went wrong. Unable to get user's info");
			}
		}
	};

	const signIn = async () => {
		setIsLogging(true);
		try {
			await GoogleSignin.hasPlayServices({
				showPlayServicesUpdateDialog: true,
			});
			const _userInfo = await GoogleSignin.signIn();
			setUserInfo ? setUserInfo(_userInfo) : null;
		} catch (error) {
			if (error.code === statusCodes.SIGN_IN_CANCELLED) {
				console.log("User cancelled the login flow");
			} else if (error.code === statusCodes.IN_PROGRESS) {
				console.log("Signing in");
			} else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
				console.log("Play services not available or outdated");
			} else {
				console.log("Some other error happened");
			}
		} finally {
			setIsLogging(false);
		}
	};

	return (
		<>
			{isLogging ? (
				<View style={styles.container}>
					<ActivityIndicator size="large" color="#0000ff" />
				</View>
			) : (
				!userInfo && (
					<View style={styles.container}>
						<Caption>{t("LOGIN.identify_yourself")}</Caption>
						<GoogleSigninButton
							style={styles.button}
							size={GoogleSigninButton.Size.Wide}
							color={GoogleSigninButton.Color.Dark}
							onPress={signIn}
							disabled={isLogging}
						/>
					</View>
				)
			)}
		</>
	);
};

export default AuthButton;
