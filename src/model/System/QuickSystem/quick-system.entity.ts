import { IEntry, Entry } from "../..";
import { System, Match } from "../system.interface";

export default class QuickSystem implements System {
	entries: Entry[];
	a: Entry | undefined;
	b: Entry | undefined;
	current: Entry[] = [];
	segments: Entry[][] = [];
	leftPool: Entry[] = [];
	rightPool: Entry[] = [];
	results: Entry[] = [];
	matches: number = 0;

	constructor(list: string[], public name: string) {
		this.entries = list.map((obj) => new Entry(obj));
		this.segments = [this.entries];
	}

	nextMatch(): Match | null {
		if (this.current.length === 0) {
			if (this.b) {
				this.segments = [
					...this.segments,
					this.rightPool,
					[this.b],
					this.leftPool,
				].filter((segment) => segment.length > 0);
			}
			if (this.segments.length === 0) {
				return null;
			}
			this.b = undefined;
			this.leftPool = [];
			this.rightPool = [];
			this.current = this.segments.pop() ?? [];
			if (this.current.length === 1) {
				let newResult = this.current.pop();
				newResult ? this.results.push(newResult) : null;
				return this.nextMatch();
			}
			this.b = this.current.pop();
		}
		this.a = this.current.pop();
		let expected = this.getExpectedMatches() + ++this.matches;
		//@ts-ignore
		return { a: this.a, b: this.b, expected: expected };
	}

	getExpectedMatches(): number {
		let pending = this.segments
			.filter((segment) => segment.length > 1)
			.map((segment) => segment.length)
			.reduce((x, y) => x + y, 0);
		pending +=
			this.current.length + this.leftPool.length + this.rightPool.length + 2;
		return Math.round(2 * pending * Math.log10(pending));
	}

	voteLeft(): void {
		if (this.a) {
			this.leftPool.push(this.a);
		}
	}

	voteRight(): void {
		if (this.a) {
			this.rightPool.push(this.a);
		}
	}

	getResults(): IEntry[] {
		return this.results;
	}

	allowsDraw(): boolean {
		return false;
	}
}
