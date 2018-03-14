import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }from "@angular/common/http"; 
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable()
export class AuthService {
    private subject: BehaviorSubject<any>;
	constructor(private http: HttpClient) { 
        let getInfo = JSON.parse(localStorage.getItem('currentUser'));
        this.subject  = new BehaviorSubject<any>({
            username:getInfo,
            isLogin:getInfo?true:false
        });
    }
    login(username: string, password: string) {
		return this.http.get<any>('https://swapi.co/api/', { params: { username: username, password: password}})
		.map(data => {
                // login successful if there's a jwt token in the response
                // store user details and jwt token in local storage to keep user logged in between page refreshes
               // let userInfo = { username: username }
                localStorage.setItem('currentUser', JSON.stringify(username));
                this.subject.next({
                    username : username,
                    isLogin:true
                    });
               return data;
            });
	}

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.subject.next({
            username : null,
            isLogin:false
        })
    }
    isLogin(): Observable<any> {
        return this.subject.asObservable();  
    }
}
