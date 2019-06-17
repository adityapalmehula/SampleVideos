import { Injectable } from '@angular/core';
import { Http ,Headers } from '@angular/http';
import { map } from "rxjs/operators";
import { AppConfig } from './../../config/app-config.constants';

@Injectable({
	providedIn: 'root'
})
export class MenusService {

	constructor(
		private http: Http
		) { }

	// Get all side manus data -
	getMenus(){
		return this.http.get(AppConfig.API_HOST+'/menus').pipe(map(data=>
			data.json()
			,(error:any)=>{
				error.json()
			}));
	}

	getContant(fileName){
		return this.http.get(AppConfig.API_HOST+'/content/'+fileName).pipe(map(data=>
			data.json()
			,(error:any)=>{
				error.json()
			}));
	}
}
