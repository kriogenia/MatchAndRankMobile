import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import i18nextReactNative from "i18next-react-native-language-detector";

import { en, es, gl } from "@rsc";

// the translations
const resources = {
	en: {
		translation: en,
	},
	es: {
		translation: es,
	},
	gl: {
		translation: gl,
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
