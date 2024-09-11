import { CanActivateFn, Router} from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);
  console.log("estoy en la guardia");



  if(authService.isAuthenticated()){
    return true;
  }
  else{
    router.navigate(['/login']);
    return false;
  }

};
