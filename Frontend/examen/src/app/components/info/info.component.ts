import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service'

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {
  msjInf = {
    titulo: '',
    descripcion: ''
  }
  constructor(
    private UserService : UserService,
    private router: Router
  ){ }

  ngOnInit(): void {
  
  }
  insertmsjinfo(){
    console.log(this.msjInf);
    this.UserService.insertinformacion(this.msjInf).subscribe( (res:any) => {
      console.log(res);
      alert('Datos Ingresados');
    })
  }


}
