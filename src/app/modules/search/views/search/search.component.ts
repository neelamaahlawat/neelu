import {Component, ViewEncapsulation, OnInit} from '@angular/core';
import {APP_CONSTANT} from "../../../../common/constants/app.constants";

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class SearchComponent implements OnInit {

  results: any[];
  loading: boolean;

  constructor() { 
    this.loading = true;
  }
  ngOnInit() { }

  updateResults(results: any[]): void {
    this.loading = false;
    this.results = results;
    // console.log("results:", this.results); // uncomment to take a look
  }

}
