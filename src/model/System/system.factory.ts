import Free4AllSystem from "./free4all-system.entity";
import QuickSystem from "./quick-system.entity";
import { System } from "./system.interface";

const systemFactory = (code: string, list: string[], name: string): System => {
	switch (code) {
		case "f":
			return new Free4AllSystem(list, name);
		case "q":
			return new QuickSystem(list, name);
		default:
			throw "Invalid code";
	}
};

export default systemFactory;
