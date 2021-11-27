import { Injectable } from "@angular/core";

@Injectable({
	providedIn: "root"
})
export class CoelhoTasksService {
	private readonly _tasks: String[] = [];

	constructor() {
		this._tasks = this.getLocalStorage();
	}

	private static setLocalStorage(tasks: String[]) {
		return localStorage.tasks = JSON.stringify(tasks);
	}

	private getLocalStorage(): String[] {
		if (localStorage.hasOwnProperty("tasks"))
			return JSON.parse(localStorage.tasks);
		else
			return JSON.parse(CoelhoTasksService.setLocalStorage(this.tasks));
	}

	public addTask(task: String) {
		this._tasks.push(task);
		CoelhoTasksService.setLocalStorage(this.tasks);
	}

	public get tasks(): String[] {
		return this._tasks;
	}

	public get tasksQty(): number {
		return this._tasks.length;
	}

	public deleteTask(i: number) {
		this._tasks.splice(i, 1);
		CoelhoTasksService.setLocalStorage(this.tasks);
	}
}
