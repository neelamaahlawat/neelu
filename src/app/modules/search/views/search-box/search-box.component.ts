import { Component, OnInit, Output, EventEmitter, ElementRef } from '@angular/core';
import { APP_CONSTANT } from '../../../../common/constants/app.constants'
// By importing just the rxjs operators we need, We're theoretically able
// to reduce our build size vs. importing all of them.
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switch';

import { SearchServices } from '../../common/services/search.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'APP_PATH/common/services/authentication.service';

@Component({
  selector: 'app-search-box',
  templateUrl:'./search-box.component.html',
  styleUrls:['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {
  @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() results: EventEmitter<any[]> = new EventEmitter<any[]>();
  searchLimit:number;
  user:any;
  userNotAllowed:boolean;
  constructor(private search: SearchServices, private el: ElementRef, private route: ActivatedRoute, private authService: AuthService) {  
    this.searchLimit = 0;
    this.userNotAllowed = false;
    this.defaultSearch('');
    this.authService.isLogin().subscribe((userInfo)=>{
			this.user = userInfo;
		});
  }
  defaultSearch(query: string):void {
    this.search.search(query).subscribe( (results: any[]) => { 
        this.loading.emit(false);
        this.results.emit(results);
        this.searchLimit++;
      },(err: any) => {
        this.loading.emit(false);
      },() => {
        this.loading.emit(false);
      }
    )
  }
  ngOnInit(): void {
    this.route.queryParams
    .filter(params => params.search)
    .subscribe(params=>{
      console.log('Query Params Search is :'+params.search);
      this.defaultSearch(params.search);
    });
    // convert the `keyup` event into an observable stream
    Observable.fromEvent(this.el.nativeElement, 'keyup')
      .map((e: any) => e.target.value)
      .filter((text: string) => text.length > 1)
      .debounceTime(250)
      .do(() => this.loading.emit(true)) //enable loader
      .map((query: string) => {
        console.log(this.user)
        if( this.user.isLogin || this.searchLimit<APP_CONSTANT.SEARCH_LIMIT){
          this.searchLimit++;
          return this.search.search(query)
        }else {
          return new Observable(observer=>{
            observer.error({ status: `User Can Only Search ${APP_CONSTANT.SEARCH_LIMIT} times.` });
          });
        }
      })
      .switch()
      .subscribe(
        (results: any[]) => { // on sucesss
         // console.log(results);
          this.loading.emit(false);
          this.results.emit(results);
        },
        (err: any) => { // on error
          console.log(err);
          this.userNotAllowed = true;
          this.loading.emit(false);
        },
        () => { // on completion
          this.loading.emit(false);
        }
      );
  }
}
