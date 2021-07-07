import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NekretninaService {

  constructor(private http: HttpClient) { }

  uri = 'http://localhost:4000';

  dohvatiNeodobreneNekretnine() {
    return this.http.get(`${this.uri}/nekretnina/dohvatiNeodobreneNekretnine`);
  }

  odobriNekretninu(idN) {
    const podaci = {
      idN: idN
    }
    return this.http.post(`${this.uri}/nekretnina/odobriNekretninu`, podaci);
  }

  dodajNekretninu(naziv, adresa, tipNekretnine, sprat, povrsina, brojSoba, namestena, tipOglasa, cena, vlasnik) {
    const podaci = {
      naziv: naziv,
      adresa: adresa,
      tipNekretnine: tipNekretnine,
      sprat: sprat,
      povrsina: povrsina,
      brojSoba: brojSoba,
      namestena: namestena, 
      tipOglasa: tipOglasa,
      cena: cena,
      vlasnik: vlasnik
    }
    return this.http.post(`${this.uri}/nekretnina/dodajNekretninu`, podaci);
  }

}
