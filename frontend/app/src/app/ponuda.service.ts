import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PonudaService {

  constructor(private http: HttpClient) { }

  uri = 'http://localhost:4000';

  dodajPonudu(cena, vlasnik, ponudjac) {
    const podaci = {
      cena: cena,
      vlasnik: vlasnik,
      ponudjac: ponudjac
    }
    return this.http.post(`${this.uri}/ponuda/dodajPonudu`, podaci);
  }

}
