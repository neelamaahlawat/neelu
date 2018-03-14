import {Component, ViewEncapsulation, OnInit} from '@angular/core';
import { AuthService } from 'APP_PATH/common/services/authentication.service';
@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
	user:any;
	constructor(private authService: AuthService) { 

	}
	logout():void{
		this.authService.logout();
	}
	ngOnInit() {
		this.authService.isLogin().subscribe((userInfo)=>{
			this.user = userInfo;
		});
	  }

}
