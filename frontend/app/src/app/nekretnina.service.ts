import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NekretninaService {

  constructor(private http: HttpClient) { }

  uri = 'http://localhost:4000';

  dohvatiSveNekretnine() {
    return this.http.get(`${this.uri}/nekretnina/dohvatiSveNekretnine`);
  }

  dohvatiNeodobreneNekretnine() {
    return this.http.get(`${this.uri}/nekretnina/dohvatiNeodobreneNekretnine`);
  }

  dohvatiOdobreneNekretnine() {
    return this.http.get(`${this.uri}/nekretnina/dohvatiOdobreneNekretnine`);
  }

  dohvatiPromovisaneNekretnine() {
    return this.http.get(`${this.uri}/nekretnina/dohvatiPromovisaneNekretnine`);
  }

  dohvatiMojeNekretnine(korisnickoIme) {
    const podaci = {
      korisnickoIme: korisnickoIme
    }
    return this.http.post(`${this.uri}/nekretnina/dohvatiMojeNekretnine`, podaci);
  }

  dohvatiNekretninuPoId(idN) {
    const podaci = {
      idN: idN
    }
    return this.http.post(`${this.uri}/nekretnina/dohvatiNekretninuPoId`, podaci);
  }

  odobriNekretninu(idN) {
    const podaci = {
      idN: idN
    }
    return this.http.post(`${this.uri}/nekretnina/odobriNekretninu`, podaci);
  }

  promovisiNekretninu(idN) {
    const podaci = {
      idN: idN
    }
    return this.http.post(`${this.uri}/nekretnina/promovisiNekretninu`, podaci);
  }

  ukloniIzPromovisanih(idN) {
    const podaci = { 
      idN: idN
    }
    return this.http.post(`${this.uri}/nekretnina/ukloniIzPromovisanih`, podaci);
  }

  dodajNekretninu(naziv, adresa, opstina, grad, tipNekretnine, brojSpratova, sprat, povrsina, brojSoba, namestena, tipOglasa, cena, vlasnik, galerija) {
    let odobrena = localStorage.getItem('ulogovan') != null ? true : false;
    const podaci = {
      naziv: naziv,
      adresa: adresa,
      opstina: opstina,
      grad: grad,
      tipNekretnine: tipNekretnine,
      brojSpratova: brojSpratova,
      sprat: sprat,
      povrsina: povrsina,
      brojSoba: brojSoba,
      namestena: namestena, 
      tipOglasa: tipOglasa,
      cena: cena,
      vlasnik: vlasnik, 
      galerija: galerija,
      promovisana: false,
      odobrena: odobrena
    }
    return this.http.post(`${this.uri}/nekretnina/dodajNekretninu`, podaci);
  }

  azurirajNekretninu(idN, naziv, adresa, opstina, grad, tipNekretnine, brojSpratova, sprat, povrsina, brojSoba, namestena, tipOglasa, cena, galerija) {
    const podaci = {
      idN: idN,
      naziv: naziv,
      adresa: adresa,
      opstina: opstina,
      grad: grad,
      tipNekretnine: tipNekretnine,
      brojSpratova: brojSpratova,
      sprat: sprat,
      povrsina: povrsina,
      brojSoba: brojSoba,
      namestena: namestena, 
      tipOglasa: tipOglasa,
      cena: cena,
      galerija: galerija
    }
    return this.http.post(`${this.uri}/nekretnina/azurirajNekretninu`, podaci);
  }

  pretraziNekretnine(naziv, grad, cenaOd, cenaDo) {
    if(!naziv) naziv = '';
    if(!grad) grad = '';
    if(!cenaOd) cenaOd = -1;
    if(!cenaDo) cenaDo = 1000000000000;
    const podaci = {
      naziv: naziv,
      grad: grad,
      cenaOd: cenaOd,
      cenaDo: cenaDo
    }
    return this.http.post(`${this.uri}/nekretnina/pretraziNekretnine`, podaci);
  }

  dohvatiBrojNekretninaUGradu(grad: string) {
    const podaci = {
      grad: grad
    }
    return this.http.post(`${this.uri}/nekretnina/dohvatiBrojNekretninaUGradu`, podaci);
  }

  dohvatiBrojKucaKojeSeIzdaju() {
    return this.http.get(`${this.uri}/nekretnina/dohvatiBrojKucaKojeSeIzdaju`);
  }

  dohvatiBrojKucaKojeSeProdaju() {
    return this.http.get(`${this.uri}/nekretnina/dohvatiBrojKucaKojeSeProdaju`);
  }

  dohvatiBrojStanovaKojiSeIzdaju() {
    return this.http.get(`${this.uri}/nekretnina/dohvatiBrojStanovaKojiSeIzdaju`);
  }

  dohvatiBrojStanovaKojiSeProdaju() {
    return this.http.get(`${this.uri}/nekretnina/dohvatiBrojStanovaKojiSeProdaju`);
  }

}
