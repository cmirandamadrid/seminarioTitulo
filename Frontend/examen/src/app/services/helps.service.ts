import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import  Global  from './Global';

@Injectable({
  providedIn: 'root'
})

export class HelpsService {
  private URL = Global.API;
  
  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService
  ) { }
  
  helpConstruccion (ayudas:any){
    return this.http.get(`${this.URL}/user/ayudas/construccion`,ayudas);
  }
  helpterceraEdad (ayudas:any){
    return this.http.get(`${this.URL}/user/ayudas/terceraEdad`,ayudas);
  }
  helpcomidas (ayudas:any){
    return this.http.get(`${this.URL}/user/ayudas/comidas`,ayudas);
  }
  helpdeportes (ayudas:any){
    return this.http.get(`${this.URL}/user/ayudas/deportes`,ayudas);
  }
  helpreciclaje (ayudas:any){
    return this.http.get(`${this.URL}/user/ayudas/reciclaje`,ayudas);
  }
  helpjardines (ayudas:any){
    return this.http.get(`${this.URL}/user/ayudas/jardines`,ayudas);
  }
  helpviajes (ayudas:any){
    return this.http.get(`${this.URL}/user/ayudas/viajes`,ayudas);
  }
  helpotros (ayudas:any){
    return this.http.get(`${this.URL}/user/ayudas/otros`,ayudas);
  }
}
