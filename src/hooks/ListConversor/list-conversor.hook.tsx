import { PersistantList } from "@hooks/index";

export class ListConversor {
	getList = (unparsedList: string): PersistantList => {
		try {
			const list: PersistantList = JSON.parse(unparsedList);
			if (list.name === "") {
				throw "invalid_name";
			}
			if (list.collection.filter((s) => s.trim() === "").length > 0) {
				throw "empty_entry";
			}
			if (list.collection.length !== [...new Set(list.collection)].length) {
				throw "duplicated_entry";
			}
			return list;
		} catch (e) {
			throw e.toString().includes("SyntaxError") ? "bad_format" : e;
		}
	};
}

export const useConversor = () => {
	return new ListConversor();
};
