import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  user = {
      username: '',
      password: '',
      perfil: 'Adm'
  }
  constructor(
    private UserService : UserService,
    private router: Router
  ){ }
  
  ngOnInit(): void {
 
  }

  login(){
    console.log(this.user);
    this.UserService.singin(this.user).subscribe( (res:any) => {
      console.log(res);

      if(res==='Usuario o contraseña son incorrectos....'){
        alert(res);
      }else{
        alert('Bienvenido')
        localStorage.setItem('encrip', res.encrip);
        this.router.navigate(['admin']);
      }
    })
  }
}
