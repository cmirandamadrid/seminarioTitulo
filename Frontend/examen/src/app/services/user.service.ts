import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import  Global  from './Global';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private URL = Global.API;

  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService ) { }

  singin (user:any){
        return this.http.post(`${this.URL}/user/singin`,user);
  }

  isUser(){
    const encrip = localStorage.getItem('encrip');
    if(this.jwtHelper.isTokenExpired(encrip) ||  !localStorage.getItem('encrip')){
      return false;
    }
    return true;
  }

  insertMensaje (msj:any){
    return this.http.post(`${this.URL}/user/insert/mensaje`,msj);
  }
  insertinformacion (msj:any){
    return this.http.post(`${this.URL}/user/insert/informacion`,msj);
  }

  insertayuda (msj:any){
    return this.http.post(`${this.URL}/user/insert/Ayudas`,msj);
  }

  consultaMensaje (msj:any){
    return this.http.get(`${this.URL}/user/consulta/mensaje`,msj);
  }
  

}
