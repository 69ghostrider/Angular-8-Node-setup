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
export class AppComponent implements OnInit,AfterViewInit{
  title = 'TestSetup';
  loading = false;
  data : any = {};
  model: NgbDateStruct;
  minDate :any;
  ckecklist = false;
  someArray :string[]= ['9', '2', '5'];
  checkBoxArray: { id: number, name: string }[] = [ { id: 11, name: 'Dr Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' } ] 
  ngOnInit(){
    // console.log("INSIDE ONINIT")
    // const perm = ["ADMIN", "EDITOR"];
 
    // this.permissionsService.loadPermissions(perm);
    
  }
  ngAfterViewInit(){
   console.log("INSIDE AFTER VIEW INIT")
    this.dataservice.getdata().subscribe(result => {
      console.log(typeof(result))
      console.log(result)
      let perm :any = result;
      this.permissionsService.loadPermissions(perm);
     })
  }
   constructor(private permissionsService: NgxPermissionsService,private modalService: NgbModal,private dataservice : DataService,private calendar: NgbCalendar,config: NgbDatepickerConfig){
    config.minDate = {year: 1900, month: 1, day: 1};
    config.maxDate = {year: 2099, month: 12, day: 31};
   
    config.outsideDays = 'hidden';
    // this.checkBoxArray.forEach( (element) => {
    // element.selected = false;
    //  });
    console.log(this.checkBoxArray)
   }
  onScroll() {
    console.log('scrolled!!');
    this.loading=true;
    setTimeout(function(){ 
      
     this.loading=false;
     }, 5000);
    
  }
   onSave(){
     localStorage.setItem('key', 'value');
    
   }
    onSubmit(f : NgForm){
      console.log(f)
      console.log(this.data)
      this.dataservice.storage = this.data;
      console.log(this.dataservice.storage)
      console.log(this.checkBoxArray)
    }
 closeResult: string;
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}

