import admob, { MaxAdContentRating } from "@react-native-firebase/admob";

admob().setRequestConfiguration({
	maxAdContentRating: MaxAdContentRating.MA,
	tagForChildDirectedTreatment: false,
	tagForUnderAgeOfConsent: true,
});
