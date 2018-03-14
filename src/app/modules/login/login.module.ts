import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login.routes';
import { LoginViewComponent } from './views/login-view/login-view.component';
@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		LoginRoutingModule,
	],
	declarations: [
		LoginViewComponent,
	],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginModule { 
	constructor(){
		console.log('login module called.')
	}
}
