import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  result :any;
  storage :any;
  constructor(private http:  HttpClient) { }

  getdata(){
    alert("INSIDE GETDATA")
    return this.http.get("/api/getData").pipe(map(result => this.result = result));
  }

  postData(data){
    alert("INSIDE POST")
    let params = data;
    return this.http.post("/api/postData",{params}).pipe(map(result => this.result));
  }


}
