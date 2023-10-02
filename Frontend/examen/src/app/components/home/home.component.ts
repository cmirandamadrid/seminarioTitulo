import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  msj = {
    mensaje: 'Todo logro empieza con la decisión de intentarlo.....',
    informacion: 'Colegio Inmaculada Concepción, somos una comunidad con valores Cristianos'
  }

  constructor(
    private UserService : UserService,
    private router: Router
  ){ }
construccion(){
  const boton = 'Construccion'
  localStorage.setItem('ubicacion',boton );  
}

terceraEdad(){
  const boton = 'Tercera Edad'
  localStorage.setItem('ubicacion',boton );  
}

comidas(){
  const boton = 'Comidas'
  localStorage.setItem('ubicacion',boton );  
}

deportes(){
  const boton = 'Deportes'
  localStorage.setItem('ubicacion',boton );  
}

reciclaje(){
  const boton = 'Reciclaje'
  localStorage.setItem('ubicacion',boton );  
}

jardines(){
  const boton = 'Jardines'
  localStorage.setItem('ubicacion',boton );  
}

viajes(){
  const boton = 'Viajes'
  localStorage.setItem('ubicacion',boton );  
}

otros(){
  const boton = 'Otros'
  localStorage.setItem('ubicacion',boton );  
}

consultaMensaje(){
  console.log(this.msj.informacion);
  this.UserService.consultaMensaje(this.msj.informacion).subscribe( (res:any) => {
    console.log(res);    
    
  })
}

}
