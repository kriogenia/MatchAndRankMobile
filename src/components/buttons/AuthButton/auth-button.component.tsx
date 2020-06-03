import React, { useState, useEffect } from "react";
import { StyleSheet, View, ActivityIndicator, Text } from "react-native";
import {
	GoogleSignin,
	GoogleSigninButton,
	statusCodes,
	User,
} from "react-native-google-signin";
import { webClientId } from "../../../../private.config";

const AuthButton = () => {
	const [userInfo, setUserInfo] = useState<User | undefined>();
	const [isLogging, setIsLogging] = useState(true);

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
			setUserInfo(_userInfo);
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
			setUserInfo(_userInfo);
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
			) : userInfo == null ? (
				<View style={styles.container}>
					<GoogleSigninButton
						style={styles.button}
						size={GoogleSigninButton.Size.Wide}
						color={GoogleSigninButton.Color.Dark}
						onPress={signIn}
					/>
				</View>
			) : (
				<Text>{userInfo.user.email}</Text>
			)}
		</>
	);

};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	imageStyle: {
		width: 200,
		height: 300,
		resizeMode: "contain",
	},
	button: {
		alignItems: "center",
		backgroundColor: "#DDDDDD",
		padding: 10,
		width: 300,
		marginTop: 30,
	},
});

export default AuthButton;