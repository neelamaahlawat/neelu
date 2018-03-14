import { Component, OnInit, Output, EventEmitter, ElementRef, ViewChild, AfterContentInit, Input, Renderer2 } from '@angular/core';
import { isNumber } from 'util';
@Component({
  selector: 'app-planet-circle',
  templateUrl:'./planet-circle.component.html',
  styleUrls:['./planet-circle.component.scss']
})
export class PlanetCircleComponent implements OnInit, AfterContentInit {
  @Input('config') config:any; 
  @ViewChild('svg') svgEle: ElementRef;
  @ViewChild('circle') circleEle: ElementRef;
  constructor( private el: ElementRef, private _render: Renderer2) { }
  /**
   *  create dynamic planet on the basis of 
   *  population
   *  Domain Radius [0, 100]
  **/
  createRadius(): number {
    let population = parseInt(this.config.population);
    let max = 1000000000000; //max assume
    const RADIUS = 80;
    const default_radious = 25;
    let radius = Math.ceil((population*RADIUS)/max);
    return !isNaN(population)?(radius>15?radius:15):default_radious;
  }
  setClimate():string {
    let climate = this.config.climate;
    let result = 'LightCoral';
    if(climate.indexOf("temperate")>-1){ 
      result = 'LightCoral';
    }
    if(climate.indexOf("arid")>-1){ 
      result = 'olive';
    }
    if(climate.indexOf("frozen")>-1){ 
      result = 'silver';
    }
    if(climate.indexOf("murky")>-1){ 
      result = 'yellow';
    }
    return result;
  }
  renderPlanet():void {
    this._render.setAttribute(this.circleEle.nativeElement, 'r', this.createRadius().toString());
    this._render.setAttribute(this.circleEle.nativeElement, 'fill', this.setClimate())
  }
  ngOnInit(): void { 
    // console.log(this.config);
   }
  ngAfterContentInit(): void {
   // console.log(this.createRadius());
    this.renderPlanet()
  }
  
}
