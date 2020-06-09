import Free4AllSystem from "./free4all-system.entity";
import { System } from "./system.interface";

const systemFactory = (code: string, list: string[], name?: string): System => {
	if (code === "f") {
		return new Free4AllSystem(list, name);
	}
	throw "Invalid code";
};

export default systemFactory;
