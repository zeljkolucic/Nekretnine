import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Korisnik } from './models/korisnik';

@Injectable({
  providedIn: 'root'
})
export class KorisnikService {

  constructor(private http: HttpClient) { }

  private loginStatus = new BehaviorSubject<boolean>(this.proveriLoginStatus());
  private korisnickoIme = new BehaviorSubject<string>(this.dohvatiKorisnickoIme());
  private tipKorisnika = new BehaviorSubject<string>(this.dohvatiTipKorisnika());

  uri = 'http://localhost:4000';

  postaviLoginStatus(vrednost: boolean) {
    this.loginStatus.next(vrednost);
  }

  proveriLoginStatus(): boolean {
    return false;
  }

  dohvatiKorisnickoIme(): string {
    let korisnik: Korisnik = JSON.parse(localStorage.getItem('ulogovan'));
    if(korisnik) {
      return korisnik.korisnickoIme;
    } else {
      return null;
    }
  }

  dohvatiTipKorisnika(): string {
    let korisnik: Korisnik = JSON.parse(localStorage.getItem('ulogovan'));
    if(korisnik) {
      return korisnik.tip;
    } else {
      return null;
    }
  }

  get jeUlogovan() {
    return this.loginStatus.asObservable();
  }

  get trenutnoKorisnickoIme() {
    return this.korisnickoIme.asObservable();
  }

  get trenutniTipKorisnika() {
    return this.tipKorisnika.asObservable();
  }

  prijava(korisnickoIme, lozinka, tip) {
    const podaci = {
      korisnickoIme: korisnickoIme,
      lozinka: lozinka,
      tip: tip
    }
    return this.http.post(`${this.uri}/korisnik/prijava`, podaci);
  }

  dohvatiKorisnika(korisnickoIme) {
    const podaci = {
      korisnickoIme: korisnickoIme
    }
    return this.http.post(`${this.uri}/korisnik/dohvatiKorisnika`, podaci);
  }

  dodajKorisnika(ime, prezime, korisnickoIme, lozinka, slika, adresa, gradDrzava, tip) {
    if(!tip) tip = 'registrovani korisnik';
    const podaci = {
      ime: ime,
      prezime: prezime,
      korisnickoIme: korisnickoIme,
      lozinka: lozinka,
      slika: slika,
      adresa: adresa,
      gradDrzava: gradDrzava,
      tip: tip
    }
    return this.http.post(`${this.uri}/korisnik/dodajKorisnika`, podaci);
  }

  dohvatiSveKorisnike() {
    return this.http.get(`${this.uri}/korisnik/dohvatiSveKorisnike`);
  }

  ukloniKorisnika(korisnickoIme) {
    const podaci = {
      korisnickoIme: korisnickoIme
    }
    return this.http.post(`${this.uri}/korisnik/ukloniKorisnika`, podaci);
  }

  promeniLozinku(korisnickoIme, novaLozinka) {
    const podaci = {
      korisnickoIme: korisnickoIme,
      novaLozinka: novaLozinka
    }
    return this.http.post(`${this.uri}/korisnik/promeniLozinku`, podaci);
  }

  azurirajKorisnika(staroKorisnickoIme, novoKorisnickoIme, lozinka, ime, prezime, slika, adresa, gradDrzava) {
    const podaci = {
      staroKorisnickoIme: staroKorisnickoIme,
      novoKorisnickoIme: novoKorisnickoIme,
      lozinka: lozinka, 
      ime: ime,
      prezime: prezime,
      slika: slika,
      adresa: adresa,
      gradDrzava: gradDrzava
    }
    return this.http.post(`${this.uri}/korisnik/azurirajKorisnika`, podaci);
  }

}
