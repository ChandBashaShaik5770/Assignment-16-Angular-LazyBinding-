import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JavaService {

  url:string = 'assets/java.json'; 
  
  constructor(private httpClient:HttpClient) { }
  getalljavacourse(){
     return this.httpClient.get(this.url)
}
}
