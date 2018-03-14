import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls : ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
  @Input() result: any;
  @HostBinding('class.col-md-4') box: boolean  = true;
  constructor(private router: Router) { }
  planetDetails():void{
    this.router.navigate(['planets', 'details',this.result.name ],{ queryParams: { 'url':this.result.url} })
  }
  ngOnInit() {
  }

}
