import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PonudaService {

  constructor(private http: HttpClient) { }

  uri = 'http://localhost:4000';

  dodajPonudu(idN, nazivNekretnine, cena, vlasnik, ponudjac, tipOglasa) {
    const podaci = {
      idN: idN,
      nazivNekretnine: nazivNekretnine,
      cena: cena,
      vlasnik: vlasnik,
      ponudjac: ponudjac,
      tipOglasa: tipOglasa,
      pregledana: false,
      prihvacena: false
    }
    return this.http.post(`${this.uri}/ponuda/dodajPonudu`, podaci);
  }

  dodajPonuduZaIznajmljivanje(idN, nazivNekretnine, cena, vlasnik, ponudjac, tipOglasa, datumOd, datumDo) {
    const podaci = {
      idN: idN,
      nazivNekretnine: nazivNekretnine,
      cena: cena,
      vlasnik: vlasnik,
      ponudjac: ponudjac,
      tipOglasa: tipOglasa,
      datumOd: datumOd,
      datumDo: datumDo,
      pregledana: false,
      prihvacena: false
    }
    return this.http.post(`${this.uri}/ponuda/dodajPonudu`, podaci);
  }

  dohvatiPonude(korisnickoIme) {
    const podaci = {
      korisnickoIme: korisnickoIme
    }
    return this.http.post(`${this.uri}/ponuda/dohvatiPonude`, podaci);
  }

  prihvatiPonudu(idP) {
    const podaci = {
      idP: idP
    }
    return this.http.post(`${this.uri}/ponuda/prihvatiPonudu`, podaci);
  }

  odbijPonudu(idP) {
    const podaci = {
      idP: idP
    }
    return this.http.post(`${this.uri}/ponuda/odbijPonudu`, podaci);
  }

  odbijOstalePonude(idN) {
    const podaci = {
      idN: idN
    }
    return this.http.post(`${this.uri}/ponuda/odbijOstalePonude`, podaci);
  }

  dohvatiUgovoreneProdaje() {
    return this.http.get(`${this.uri}/ponuda/dohvatiUgovoreneProdaje`);
  }

  proveriDostupnost(idN, datumOd, datumDo) {
    const podaci = {
      idN: idN,
      datumOd: datumOd,
      datumDo: datumDo
    }
    return this.http.post(`${this.uri}/ponuda/proveriDostupnost`, podaci);
  }

  proveriDaLiJeProdata(idN) {
    const podaci = {
      idN: idN
    }
    return this.http.post(`${this.uri}/ponuda/proveriDaLiJeProdata`, podaci);
  }

}
