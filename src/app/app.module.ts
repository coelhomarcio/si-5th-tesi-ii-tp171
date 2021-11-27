import { NgModule }                from "@angular/core";
import { BrowserModule }           from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule }             from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent }         from "./app.component";
import { CoelhoHomeComponent }  from "./component/coelho-home/coelho-home.component";
import { CoelhoTasksComponent } from "./component/coelho-tasks/coelho-tasks.component";

@NgModule({
	declarations: [
		AppComponent,
		CoelhoHomeComponent,
		CoelhoTasksComponent
	],
	imports:      [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		FormsModule
	],
	providers:    [],
	bootstrap:    [AppComponent]
})
export class AppModule {
}
