import React, { FunctionComponent } from "react";
import { View } from "react-native";
import { Avatar, Title } from "react-native-paper";
import { styles } from "./user-view.styles";
import { UserConsumerProps } from "@hooks/index";
import { defaultUser } from "@rsc/img/stock";

const UserView: FunctionComponent<UserConsumerProps> = ({ context }) => {
	const { userInfo } = context;

	const name = userInfo?.user.name ? userInfo.user.name : "";
	const photo = userInfo?.user.photo ? userInfo.user.photo : defaultUser;

	return (
		<View style={styles.userInfoSection}>
			<Avatar.Image
				source={{
					uri: photo,
				}}
				size={50}
			/>
			<Title style={styles.title}>{name}</Title>
		</View>
	);
};

export default UserView;
