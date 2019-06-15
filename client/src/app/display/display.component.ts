import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor(
  	) { }

  ngOnInit() {
  	this.getInformations()
  }
  
  getInformations(){
  }
  // 	this.classesService.getClasses().subscribe((response)=>{
		// 	this.messageService.showLoader.emit(false);
		// 	if(response['success'] && response['data']){
		// 		this.classArray=response.data.classes;
		// 	}
		// },error=>{  
		// 	this.messageService.showLoader.emit(false);
		// 	this.errorMessage=error.json().msg;
		// 	this.handleError(error);
		// })
  // }
}
