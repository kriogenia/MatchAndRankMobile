import { IEntry } from "./entry.interface";

export class Entry implements IEntry {
	points: number;
	clashed: string[];
	won: string[];

	constructor(public name: string) {
		this.name = name;
		this.points = 0;
		this.clashed = [];
		this.won = [];
	}

	findOpponent(list:IEntry[]) {
		for (let i = 0; i < list.length; i++) {
			if (!this.clashed.includes(list[i].name)) {
				return i;
			}
		}
		return -1;
	}

	getWins(list:IEntry[]) {
		return list.reduce((x, y) => (this.won.includes(y.name) ? x + 1 : x), 0);
	}
}
