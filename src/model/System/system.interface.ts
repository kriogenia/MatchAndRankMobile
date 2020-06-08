import { IEntry } from "@model/index";

export interface Match {
	a: IEntry;
	b: IEntry;
	expected: number;
}

export interface System {
	nextMatch(): Match | null;
	voteLeft(): void;
	voteRight(): void;
	getResults(): IEntry[];
}
