import Free4AllSystem from "./free4all-system.entity";
import { System } from "./system.interface";

const systemFactory = (code: string, list: string[]): System | null => {
	if (code === "f") {
		return new Free4AllSystem(list);
	}
	return null;
};

export default systemFactory;
