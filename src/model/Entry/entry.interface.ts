export interface IEntry {
	name: string;
	points: number;
	clashed: string[];
	won: string[];
	findOpponent(list: IEntry[]): number;
	getWins(list: IEntry[]): number;
}
