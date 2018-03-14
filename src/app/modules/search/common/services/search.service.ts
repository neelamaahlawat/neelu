import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse, HttpHeaders} from "@angular/common/http";
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';
@Injectable()
export class SearchServices {
	constructor(private http: Http) {

	}
	search(query: string): Observable<any[]> {
		const params: string = [
		  `search=${query}`
		].join('&');
		const queryUrl = `https://swapi.co/api/planets?${params}`;
		return this.http.get(queryUrl).map((response: Response) => {
		  return (<any>response.json().results)
		});
		}
	details(url: string):Observable<any[]>{
		console.log(url)
		return this.http.get(url)
		.map((response: Response)=> {
			return (<any>response.json())
		})
	}
}



