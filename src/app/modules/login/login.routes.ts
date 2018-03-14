import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { LoginViewComponent } from './views/login-view/login-view.component';

const LoginRoutes: Routes = [
	{ path: '', component: LoginViewComponent }];
export const LoginRoutingModule: ModuleWithProviders = RouterModule.forChild(LoginRoutes);
