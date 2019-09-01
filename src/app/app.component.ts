import { DataService } from './../../services/data.service';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TestSetup';
   someArray :string[]= ['9', '2', '5'];
   
   constructor(private dataservice : DataService){
    //  dataservice.getdata().subscribe(result => {
    //    console.log("Reached Component")
    //  })
   }
   onSave(){
     localStorage.setItem('key', 'value');
     this.dataservice.getdata().subscribe(result => {
       console.log("Reached Component")
     })
   }
 
}

