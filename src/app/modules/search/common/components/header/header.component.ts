import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'main-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
	constructor(private router: Router) { }
  ngOnInit() { 

  }
}
