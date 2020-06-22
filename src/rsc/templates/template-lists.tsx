import { bookSagas } from "./famous-sagas.list";
import { fromSoftware } from "./from-soft.list";
import { pizza } from "./pizza.list";
import { queen } from "./queen-songs.list";
import { sports } from "./sports-list";
import { PersistantList } from "@hooks/index";

export const templates: PersistantList[] = [
	bookSagas,
	fromSoftware,
	pizza,
	queen,
	sports,
];
