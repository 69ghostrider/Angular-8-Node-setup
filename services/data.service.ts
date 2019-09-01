import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  result :any;
  constructor(private http:  HttpClient) { }

  getdata(){
    return this.http.get("/api/users",{responseType: 'text'}).pipe(map(result => this.result = result));
  }
}
