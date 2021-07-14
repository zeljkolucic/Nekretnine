import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Korisnik } from './models/korisnik';

@Injectable({
  providedIn: 'root'
})
export class RegistrovaniKorisnikGuard implements CanActivate {

  constructor(private router: Router) {
    
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let korisnik: Korisnik = JSON.parse(localStorage.getItem('ulogovan'));
      if(!korisnik) {
        this.router.navigate(['']);
      } else if(korisnik.tip == 'administrator') {
        this.router.navigate(['administrator']);
        return false;
      } else if(korisnik.tip == 'radnik agencije') {
        this.router.navigate(['radnikAgencije']);
        return false;
      } else {
        return true;
      }
  }
  
}
