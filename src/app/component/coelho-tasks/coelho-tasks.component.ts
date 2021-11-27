import { Component }          from "@angular/core";
import { CoelhoTasksService } from "../../service/coelho-tasks.service";

@Component({
	selector:    "app-coelho-tasks",
	templateUrl: "./coelho-tasks.component.html"
})
export class CoelhoTasksComponent {
	public task: String | null = null;

	constructor(private coelhoTasksService: CoelhoTasksService) { }

	public addTask() {
		if (this.task !== null) {
			this.coelhoTasksService.addTask(this.task);
			this.task = null;
		}
	}

	public get tasks() {
		return this.coelhoTasksService.tasks;
	}

	public get isTask(): boolean {
		return this.coelhoTasksService.tasksQty > 0;
	}

	public deleteTask(i: number) {
		this.coelhoTasksService.deleteTask(i);
	}
}
