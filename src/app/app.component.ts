import { NgForm } from '@angular/forms';
import { DataService } from './../../services/data.service';
import {NgbCalendar,NgbDatepickerConfig,NgbDateStruct,NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';;
import { Component,OnInit,AfterViewInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  getResponse:any;
  postResponse:any;
  ngOnInit(){
    this.dataservice.getdata().subscribe(result => {
      this.getResponse = result;
     })
  }
  
  sendPostData(){
    let  params = {
      "name": "morpheus",
      "job": "leader"
    }
    this.dataservice.postData(params).subscribe(result => {
      this.postResponse = result;
     })
  }
   constructor(private dataservice : DataService){
   }
  
}

