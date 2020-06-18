import AsyncStorage from "@react-native-community/async-storage";

export interface PersistantObject {
	name: string;
	type: "list" | "rank";
	collection: string[];
}

export interface PersistantList extends PersistantObject {
	type: "list";
	collection: string[];
}

export class StorageManager {
	getLists = async (): Promise<[string, string | null][]> => {
		try {
			const keys = await AsyncStorage.getAllKeys();
			const list_keys = keys.filter((key) => key.includes("@list"));
			return AsyncStorage.multiGet(list_keys);
		} catch (e) {
			throw e;
		}
	};

	removeList = async (name: string): Promise<void> => {
		try {
			return AsyncStorage.removeItem(`@list_${name}`);
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
}

export const useStorage = () => {
	return new StorageManager();
};
