import Free4AllSystem from "./Free4All/free4all-system.entity";
import QuickSystem from "./QuickSystem/quick-system.entity";
import { System } from "./system.interface";
import Free4AllWithDrawSystem from "./Free4All/free4all-draw-system.entity";

const systemFactory = (code: string, list: string[], name: string): System => {
	switch (code) {
		case "f":
			return new Free4AllSystem(list, name);
		case "q":
			return new QuickSystem(list, name);
		case "fd":
			return new Free4AllWithDrawSystem(list, name);
		default:
			throw "Invalid code";
	}
};

export default systemFactory;
