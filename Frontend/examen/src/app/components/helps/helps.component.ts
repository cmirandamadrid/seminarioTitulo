import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service'

@Component({
  selector: 'app-helps',
  templateUrl: './helps.component.html',
  styleUrls: ['./helps.component.css']
})
export class HelpsComponent {
  Ayudas = {
    nombre: '',
    descripcion: '',
    idCategoria: '',
    cantidad: '',
    Estado: 'Activo',
    fecha: Date()
  }
  constructor(
    private UserService : UserService,
    private router: Router
  ){ }

  ngOnInit(): void {
  
  }
  insertAyudas(){
    console.log(this.Ayudas);
    this.UserService.insertayuda(this.Ayudas).subscribe( (res:any) => {
      console.log(res);
      if(res){
      alert('Datos Ingresados');
      }else{
        alert('ubo un error al ingresar los datos');
      }
    })
  }


}
