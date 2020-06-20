import AsyncStorage from "@react-native-community/async-storage";
import { Entry } from "@model/index";

export interface PersistantObject {
	name: string;
	type: "list" | "rank";
}

export interface PersistantList extends PersistantObject {
	type: "list";
	collection: string[];
}

export interface PersistantRank extends PersistantObject {
	type: "rank";
	collection: { position: number; entry: string }[];
}

export class StorageManager {
	get = async (type: "list" | "rank"): Promise<[string, string | null][]> => {
		try {
			const keys = await AsyncStorage.getAllKeys();
			const list_keys = keys.filter((key) => key.includes(`@${type}_`));
			return AsyncStorage.multiGet(list_keys);
		} catch (e) {
			throw e;
		}
	};

	remove = async (type: "list" | "rank", name: string): Promise<void> => {
		try {
			return AsyncStorage.removeItem(`@${type}_${name}`);
		} catch (e) {
			console.error(e.message);
		}
	};

	saveList = async (list: string[], saveAs: string): Promise<void> => {
		try {
			const object: PersistantList = {
				name: saveAs,
				type: "list",
				collection: list,
			};
			await AsyncStorage.setItem(`@list_${saveAs}`, JSON.stringify(object));
		} catch (e) {
			console.error(e.message);
		}
	};

	saveRanking = async (list: Entry[], saveAs: string): Promise<void> => {
		let counter = 0;
		try {
			const object: PersistantRank = {
				name: saveAs,
				type: "rank",
				collection: list.map((e) => {
					return { position: ++counter, entry: e.name };
				}),
			};
			await AsyncStorage.setItem(`@rank_${saveAs}`, JSON.stringify(object));
		} catch (e) {
			console.error(e.message);
		}
	};
}

export const useStorage = () => {
	return new StorageManager();
};
