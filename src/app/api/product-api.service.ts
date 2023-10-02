import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {

  constructor( private http:HttpClient) { }


//get Method
    getproduct(){
      return this.http.get('http://localhost:3000/posts').pipe(map((res:any)=>{
        return res;
      }))
    }

}
