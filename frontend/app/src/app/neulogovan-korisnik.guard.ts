import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NeulogovanKorisnikGuard implements CanActivate {

  constructor(private router: Router) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let korisnik = JSON.parse(localStorage.getItem('ulogovan'));
    if(!korisnik) {
      return true;
    } else if(korisnik.tip == 'administrator') {
      this.router.navigate(['administrator']);
      return false;
    } else if(korisnik.tip == 'registrovani korisnik') {
      this.router.navigate(['registrovaniKorisnik']);
      return false;
    } else if(korisnik.tip == 'radnik agencije') {
      this.router.navigate(['radnikAgencije']);
      return false;
    }
  }
  
}
