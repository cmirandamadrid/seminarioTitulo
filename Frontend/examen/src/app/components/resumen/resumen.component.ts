import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelpsService } from 'src/app/services/helps.service'

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css']
})
export class ResumenComponent implements OnInit {
  ayudas = {
    nombre: '',
    descripcion: '',
    nombreCategoria:'',
    estado: '',
    fecha: ''
  }

  
  constructor(    
    private HelpsService : HelpsService,
    private router: Router,

    
  ){ }

  ngOnInit(): void {
   
  }
 
alerta(){
  alert('En construcción');
}

  helpsConstruccion(){
     this.HelpsService.helpConstruccion(this.ayudas).subscribe( (res: any) =>{
      console.log(res);
    })    
  }
  helpsterceraEdad(){
      this.HelpsService.helpterceraEdad(this.ayudas).subscribe( (res: any) =>{
      console.log(res);
    })
  }
  helpscomidas(){
      this.HelpsService.helpcomidas(this.ayudas).subscribe( (res: any) =>{
      console.log(res);
    })
  }
  helpsdeportes(){
      this.HelpsService.helpdeportes(this.ayudas).subscribe( (res: any) =>{
      console.log(res);
    })
  }
  helpsreciclaje(){
      this.HelpsService.helpreciclaje(this.ayudas).subscribe( (res: any) =>{
      console.log(res);
    })
  }
  helpsjardines(){
      this.HelpsService.helpjardines(this.ayudas).subscribe( (res: any) =>{
      console.log(res);
    })
  }
  helpsviajes(){
      this.HelpsService.helpviajes(this.ayudas).subscribe( (res: any) =>{
      console.log(res);
    })
  }
  helpsotros(){
      this.HelpsService.helpotros(this.ayudas).subscribe( (res: any) =>{
      console.log(res);
    })
  }

}
