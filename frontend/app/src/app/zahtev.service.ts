import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Zahtev } from './models/zahtev';

@Injectable({
  providedIn: 'root'
})
export class ZahtevService {

  constructor(private http: HttpClient) { }

  uri = 'http://localhost:4000';

  dodajZahtev(ime, prezime, korisnickoIme, lozinka, slika, adresa, gradDrzava) {
    const podaci = {
      ime: ime,
      prezime: prezime,
      korisnickoIme: korisnickoIme,
      lozinka: lozinka,
      slika: slika,
      adresa: adresa,
      gradDrzava: gradDrzava
    } 
    return this.http.post(`${this.uri}/zahtev/dodajZahtev`, podaci);
  }

  dohvatiZahteve() {
    return this.http.get(`${this.uri}/zahtev/dohvatiZahteve`);
  }

  ukloniZahtev(zahtev: Zahtev) {
    const podaci = {
      korisnickoIme: zahtev.korisnickoIme
    }
    return this.http.post(`${this.uri}/zahtev/ukloniZahtev`, podaci);
  }

}
