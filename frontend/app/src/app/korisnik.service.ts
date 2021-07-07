import { HttpClient } from '@angular/common/http';
import { importExpr } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { Zahtev } from './models/zahtev';

@Injectable({
  providedIn: 'root'
})
export class KorisnikService {

  constructor(private http: HttpClient) { }

  uri = 'http://localhost:4000';

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
