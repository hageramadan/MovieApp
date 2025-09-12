import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const guestGuard: CanActivateFn = (route, state) => {
  
  const isLoggedIn= localStorage.getItem("tmdb_session_id")
  const router= inject(Router)
  if(isLoggedIn==null){
    return true;
    //unauth
    //login
    //register 
    //enabled
  }
  else{
    //authenticated
    //disabled
    router.navigateByUrl("/");
    return false;
  }
};
