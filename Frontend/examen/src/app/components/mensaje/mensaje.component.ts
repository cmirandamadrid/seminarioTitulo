import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service'

@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.component.html',
  styleUrls: ['./mensaje.component.css']
})
export class MensajeComponent {

    msj = {
      titulo: '',
      descripcion: ''
    }
    constructor(
      private UserService : UserService,
      private router: Router
    ){ }

    ngOnInit(): void {
    
    }
    insertmsj(){
      console.log(this.msj);
      this.UserService.insertMensaje(this.msj).subscribe( (res:any) => {
        console.log(res);
        alert('Datos Ingresados');
        
      })
    }


}
