import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PorukaService {

  constructor(private http: HttpClient) { }

  uri = 'http://localhost:4000';

  posaljiPoruku(naslov, posiljalac, primalac, tekst, datum) {
    const podaci = {
      naslov: naslov,
      posiljalac: posiljalac,
      primalac: primalac,
      tekst: tekst,
      datum: datum,
      procitana: false
    }
    return this.http.post(`${this.uri}/poruka/posaljiPoruku`, podaci);
  }

  dohvatiMojePoruke(korisnickoIme) {
    const podaci = {
      korisnickoIme: korisnickoIme
    }
    return this.http.post(`${this.uri}/poruka/dohvatiMojePoruke`, podaci);
  }

  dohvatiMojeArhiviranePoruke(korisnickoIme) {
    const podaci = {
      korisnickoIme: korisnickoIme
    }
    return this.http.post(`${this.uri}/poruka/dohvatiMojeArhiviranePoruke`, podaci);
  }

  arhivirajPoruku(idP) {
    const podaci = {
      idP: idP
    }
    return this.http.post(`${this.uri}/poruka/arhivirajPoruku`, podaci);
  }

}
