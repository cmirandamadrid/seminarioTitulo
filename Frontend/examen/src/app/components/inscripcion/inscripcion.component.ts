import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscripcion',
  templateUrl: './inscripcion.component.html',
  styleUrls: ['./inscripcion.component.css']
})
export class InscripcionComponent {

  constructor(
    private router: Router
  ){ }


  alerta(){
    alert('En construcción, sorry..!!')
    this.router.navigate(['home']);
  }
}
