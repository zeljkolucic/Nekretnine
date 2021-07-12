import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PonudaService {

  constructor(private http: HttpClient) { }

  uri = 'http://localhost:4000';

  dodajPonudu(idN, cena, vlasnik, ponudjac) {
    const podaci = {
      idN: idN,
      cena: cena,
      vlasnik: vlasnik,
      ponudjac: ponudjac,
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


}
