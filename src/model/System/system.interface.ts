import { IEntry } from "@model/index";

export interface Match {
	a: IEntry;
	b: IEntry;
	expected: number;
}

export interface System {
	name: string;

	nextMatch(): Match | null;
	getExpectedMatches(): number;
	voteLeft(): void;
	voteRight(): void;
	getResults(): IEntry[];
}
