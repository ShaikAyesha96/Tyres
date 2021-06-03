import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReturnStatement } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  updatetyres(id: any, value: any) {
    throw new Error('Method not implemented.');
  }
URL="http://localhost:3000/tyres";
regURL="http://localhost:3000/users";
  constructor(private _http:HttpClient) {}
    gettyreslist(){
     return this._http.get(this.URL);
    }
    addresto(data){
      return this._http.post(this.URL,data);
    }
    deleteResto(id){
      return this._http.delete(`${this.URL}/${id}`)
    }
    getCurrentData(id){
      return this._http.get(`${this.URL}/${id}`)
    }
    updateResto(id,data){
      return this._http.put(`${this.URL}/${id}`,data)
    }
    loginUser(email: string, password: string){
      return this._http.post(this.regURL,{
        email: email,
        password: password
      });
    }
    regityres(data){
      return this._http.post(this.regURL,data)
    }
    
}
