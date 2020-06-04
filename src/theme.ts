import {
	DarkTheme as PaperDarkTheme,
	DefaultTheme as PaperLightTheme,
} from "react-native-paper";
import { Theme as PaperTheme } from "react-native-paper/lib/typescript/src/types";
import {
	DarkTheme as NavigationDarkTheme,
	DefaultTheme as NavigationLightTheme,
} from "@react-navigation/native";

const paperDarkTheme: PaperTheme = {
	...PaperDarkTheme,
	colors: {
		...PaperDarkTheme.colors,
		primary: "#8c0032",
		accent: "#008ba3",
	},
};

const paperLightTheme: PaperTheme = {
	...PaperLightTheme,
	colors: {
		...PaperLightTheme.colors,
		primary: "#fa5788",
		accent: "#62efff",
	},
};

const DarkTheme = {
	...NavigationDarkTheme,
	...paperDarkTheme,
	colors: { ...NavigationDarkTheme.colors, ...paperDarkTheme.colors },
};

const LightTheme = {
	...NavigationLightTheme,
	...paperLightTheme,
	colors: { ...NavigationLightTheme.colors, ...paperLightTheme.colors },
};

export { DarkTheme, LightTheme };
