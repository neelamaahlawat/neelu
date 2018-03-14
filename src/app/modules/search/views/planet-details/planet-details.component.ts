import { Component, OnInit, Output, EventEmitter, ElementRef, ViewChild, AfterContentInit, Input, Renderer2 } from '@angular/core';
import { SearchServices } from '../../common/services/search.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-planet-details',
  templateUrl:'./planet-details.component.html',
  styleUrls:['./planet-details.component.scss']
})
export class PlanetDetailsComponent implements OnInit {
  planet:any;
  loader:boolean = true;
  constructor( private route:ActivatedRoute, private search: SearchServices) { 

  }
  fetchDetails(planetUrl:string):void {
    this.search.details(planetUrl).subscribe((result:any)=>{
      console.log(result)
      this.planet = result;
      this.loader = false;
    })
  }
  ngOnInit(): void { 
    /**
     * fetch params from url
     */
    this.route.queryParams
    .map(params=> params.url)
    .subscribe(params =>{
      this.fetchDetails(params);
    })
   }
  
}
