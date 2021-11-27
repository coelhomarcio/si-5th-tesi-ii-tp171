import { Component } from "@angular/core";

import { CoelhoTasksService } from "../../service/coelho-tasks.service";

@Component({
	selector:    "app-coelho-home",
	templateUrl: "./coelho-home.component.html"
})
export class CoelhoHomeComponent {
	constructor(private coelhoTasksService: CoelhoTasksService) {
	}

	public get tasksQty(): number {
		return this.coelhoTasksService.tasksQty;
	}
}
