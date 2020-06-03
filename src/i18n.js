import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import i18nextReactNative from "i18next-react-native-language-detector";

import { en } from "@rsc";

// the translations
const resources = {
	en: {
		translation: en,
	},
};

i18n
	.use(i18nextReactNative)
	.use(initReactI18next)
	.init({
		resources,
		fallbackLng: "en",
		interpolation: {
			escapeValue: false,
		},
	});

export default i18n;
