import { NgModule }             from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CoelhoHomeComponent }  from "./component/coelho-home/coelho-home.component";
import { CoelhoTasksComponent } from "./component/coelho-tasks/coelho-tasks.component";

const routes: Routes = [
	{ path: "home", component: CoelhoHomeComponent },
	{ path: "tasks", component: CoelhoTasksComponent },
	{ path: "", redirectTo: "home", pathMatch: "full" }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
