import { IEntry, Entry } from "../";
import { System, Match } from "./system.interface";

export default class Free4AllSystem implements System {
	entries: Entry[];
	candidates: Entry[];
	a: Entry | undefined;
	b: Entry | undefined;

	constructor(list: string[]) {
		this.entries = list.map((obj) => new Entry(obj));
		this.candidates = [...this.entries];
	}

	nextMatch(): Match | null {
		if (this.candidates.length > 1) {
			let index = -1;
			this.a = this.candidates.pop();
			if (this.a) index = this.a.findOpponent(this.candidates);
			if (index === -1) {
				return this.nextMatch();
			} // This candidate doesnt have available opponents
			this.b = this.candidates[index];
			this.candidates.splice(index, 1);
			if (this.a) {
				this.a.clashed.push(this.b.name);
				this.b.clashed.push(this.a.name);
				return { a: this.a, b: this.b, expected: this.getExpectedMatches() };
			}
			return null;
		} else {
			return this.nextRound();
		}
	}

	getExpectedMatches(): number {
		let i = 0;
		return this.entries.map(() => i++).reduce((total, n) => total + n, 0);
	}

	voteLeft(): void {
		if (this.a && this.b) {
			this.a.points++;
			this.a.won.push(this.b.name);
		}
	}

	voteRight(): void {
		if (this.a && this.b) {
			this.b.points++;
			this.b.won.push(this.a.name);
		}
	}

	getResults(): IEntry[] {
		let results: IEntry[] = [];
		let sorted = this.entries.sort((a, b) => b.points - a.points);
		while (sorted.length > 0) {
			let points = sorted[0].points;
			let step = sorted.filter((x) => x.points === points);
			sorted = sorted.filter((x) => x.points !== points);
			results = [...results, ...this.decideDraw(step)];
		}
		return results;
	}

	nextRound(): Match | null {
		this.candidates = [...this.entries].filter(
			(e) => e.clashed.length < this.entries.length - 1,
		);
		if (this.candidates.length > 1) {
			return this.nextMatch();
		} else {
			return null;
		}
	}

	decideDraw(step: IEntry[]): IEntry[] {
		if (step.length === 1) {
			return step;
		}
		let map = new Map(step.map((e) => [e.name, e.getWins(step)]));
		// @ts-ignore
		return step.sort((x, y) => map[y.name] - map.get(x.name));
	}
}
