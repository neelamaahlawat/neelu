import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { SearchComponent } from './views/search/search.component';
import { PlanetDetailsComponent } from './views/planet-details/planet-details.component';

const SearchRoutes: Routes = [
	{ path: '', component: SearchComponent},
	{ path: 'details/:name', component: PlanetDetailsComponent}];
export const SearchRoutesRoutingModule: ModuleWithProviders = RouterModule.forChild(SearchRoutes);
