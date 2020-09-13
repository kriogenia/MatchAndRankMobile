import { PersistantList } from "@hooks/index";

export const bookSagas: PersistantList = {
	name: "Book Sagas",
	type: "list",
	collection: [
		"The Lord of the Rings",
		"Stormlight Archive",
		"The Chronicles of Narnia",
		"Harry Potter",
		"Hunger Games",
		"The Wheel of Time",
	],
};
