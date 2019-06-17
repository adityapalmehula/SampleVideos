import { Component, OnInit, ViewContainerRef, ElementRef } from '@angular/core';
import { MenusService } from './../services/menus/menus.service';
import { MessageService } from './../services/common/message.service';
import { ErrorService } from './../services/common/error.service';

@Component({
	selector: 'app-display',
	templateUrl: './display.component.html',
	styleUrls: ['./display.component.css'],
	providers:[MenusService]
})
export class DisplayComponent implements OnInit {
	errorMessage: string;
	videosArray:any=[];
	imagesArray:any=[];
	audiosArray:any=[];
	textsArray:any=[];
	filesArray:any=[];
	fileName:string;

	// file content -
	titile:string;
	content1:string;
	content2:string;
	fileType:string;
	files:any=[];

	constructor(
		private menusService : MenusService,
		private messageService : MessageService,
		private _vcr : ViewContainerRef,
		private elRef: ElementRef,
		private errorService: ErrorService
		) { }

	ngOnInit() {
		this.getInformations()
	}

	getInformations(){
		this.messageService.showLoader.emit(true);
		this.menusService.getMenus().subscribe((response)=>{
			this.messageService.showLoader.emit(false);
			if(response['success'] && response['data']){
				this.videosArray=response.data.videos.videosArray;
				this.imagesArray=response.data.images.imagesArray;
				this.audiosArray=response.data.audios.audiosArray;
				this.textsArray=response.data.texts.textsArray;
				this.filesArray=response.data.files.filesArray;
				let obj={};
				obj['fileName']='mp4file.json';
				this.getFileName(obj);
			}
		},error=>{  
			this.messageService.showLoader.emit(false);
			this.errorMessage=error.json().msg;
			this.handleError(error);
		})
	}

	// get Object of file -
	getFileName(fileObj:any){
		var obj=fileObj;
		this.fileName=fileObj['fileName'];
		this.messageService.showLoader.emit(true);
		this.menusService.getContant(this.fileName).subscribe((response)=>{
			this.messageService.showLoader.emit(false);
			if(response['success'] && response['data']){
				this.titile=response.data.fileContent.titile;
				this.content1=response.data.fileContent.content1;
				this.content2=response.data.fileContent.content2;
				this.fileType=response.data.fileContent.fileType;
				this.files=response.data.fileContent.files;
				//this.syllabusArray=response['data'];
			}
		},error=>{
			this.messageService.showLoader.emit(false);
			this.errorMessage=error.json().msg;
			this.handleError(error);
		})
	}

	// Handle error
	handleError(error) {
		this.messageService.showLoader.emit(false);
		this.errorService.handleError(error, this._vcr);
	}

}
