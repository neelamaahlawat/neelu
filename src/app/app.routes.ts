import { NgModule } from '@angular/core';
import {RouterModule, Route} from '@angular/router';
import { PageNotFoundComponent } from "./common/components/404/PageNotFound.component";

const ROUTES: Route[] = [
    { path: '', redirectTo: '/planets', pathMatch : 'full'},
    { path: 'login', loadChildren: './modules/login/login.module#LoginModule' },
    { path: 'planets', loadChildren: './modules/search/search.module#SearchModule'},
    { path: '404', component: PageNotFoundComponent, pathMatch : 'full'},
    { path: '**', redirectTo: '/404'}
  ];
@NgModule({
    imports: [
        RouterModule.forRoot(ROUTES) //preloadingStrategy : ModulePreloader
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}
