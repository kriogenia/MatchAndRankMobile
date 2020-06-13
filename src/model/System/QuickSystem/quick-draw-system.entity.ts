import { Draw } from "../system.interface";
import QuickSystem from "./quick-system.entity";

export default class QuickWithDrawSystem extends QuickSystem implements Draw {
	voteDraw(): void {
		if (this.a) {
			if (this.leftPool.length < this.rightPool.length) {
				this.leftPool.push(this.a);
			} else {
				this.rightPool.push(this.a);
			}
		}
	}

	allowsDraw(): boolean {
		return true;
	}
}
