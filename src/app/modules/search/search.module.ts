import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import {SearchRoutesRoutingModule} from './search.routes';
import { SearchServices } from './common/services/search.service';
import { SearchComponent } from './views/search/search.component';
import { SearchBoxComponent } from './views/search-box/search-box.component';
import { SearchResultComponent } from './views/search-result/search-result.component';
import { PlanetCircleComponent } from './views/planet-circle/planet-circle.component';
import { PlanetDetailsComponent } from './views/planet-details/planet-details.component';


@NgModule({
  imports: [
    CommonModule,
    HttpModule,
		HttpClientModule,
    SearchRoutesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    SearchComponent,
    SearchBoxComponent,
    SearchResultComponent,
    PlanetCircleComponent,
    PlanetDetailsComponent
  	],
  providers:[
    SearchServices
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  entryComponents: [
  ]
})
export class SearchModule { }


