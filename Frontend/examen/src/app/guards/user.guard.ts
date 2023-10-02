import { Injectable, inject } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivateFn, Router, RouterEvent, RouterStateSnapshot } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Injectable({
  providedIn: 'root'
})

class UserGuard{
  constructor(
    private userService: UserService,
    private router: Router
  ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean{
     if(!this.userService.isUser()){
      console.log('No existe una inicialización de un Administrador o ya expiró!!');
      this.router.navigate(['login']);
      return false;
     } 
      return true;
    }  
}
export const IsUserGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state:RouterStateSnapshot):boolean => {
  
  return inject(UserGuard).canActivate(route,state);
}

