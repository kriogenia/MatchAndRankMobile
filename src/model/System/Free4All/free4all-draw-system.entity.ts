import { Draw } from "../system.interface";
import Free4AllSystem from "./free4all-system.entity";

export default class Free4AllWithDrawSystem extends Free4AllSystem
	implements Draw {
	voteLeft(): void {
		if (this.a && this.b) {
			this.a.points += 3;
			this.a.won.push(this.b.name);
		}
	}

	voteRight(): void {
		if (this.a && this.b) {
			this.b.points += 3;
			this.b.won.push(this.a.name);
		}
	}

	voteDraw(): void {
		if (this.a && this.b) {
			this.a.points++;
			this.b.points++;
		}
	}

	allowsDraw(): boolean {
		return true;
	}
}
