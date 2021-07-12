import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SanduceService {

  constructor(private http: HttpClient) { }

  uri = 'http://localhost:4000';

  dohvatiMojePoruke(korisnickoIme: string) {
    const podaci = {
      korisnickoIme: korisnickoIme
    }
    return this.http.post(`${this.uri}/sanduce/dohvatiMojePoruke`, podaci);
  }

  dodajPonudu() {
    const podaci = {
      cena: 100000,
      vlasnik: 'jovkemax',
      ponudjac: 'admin'
    }
    return this.http.post(`${this.uri}/sanduce/dodajPonudu`, podaci);
  }

}
