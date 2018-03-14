import { BrowserAnimationsModule, } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/pairwise';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routes';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from "./common/components/404/PageNotFound.component";
import { HeaderComponent } from "./common/components/header/header.component";
import { FooterComponent } from "./common/components/footer/footer.component";
import { AuthService } from "./common/services/authentication.service";

@NgModule({
	declarations: [
		AppComponent,
		PageNotFoundComponent,
		HeaderComponent,
		FooterComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpModule,
		HttpClientModule
	],
	providers:[ AuthService ],
    schemas : [ CUSTOM_ELEMENTS_SCHEMA ],
	bootstrap: [AppComponent]
})
export class AppModule {
	constructor() {  }
}
