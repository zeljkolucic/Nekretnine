import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProcenatService {

  constructor(private http: HttpClient) { }

  uri = 'http://localhost:4000';

  postaviProcenatZaProdaju(procenat: number) {
    const podaci = {
      namena: 'Prodaja',
      iznos: procenat
    }
    return this.http.post(`${this.uri}/procenat/azurirajProcenat`, podaci);
  }

  postaviProcenatZaIzdavanje(procenat: number) {
    const podaci = {
      namena: 'Izdavanje',
      iznos: procenat
    }
    return this.http.post(`${this.uri}/procenat/azurirajProcenat`, podaci);
  }

  dohvatiProcenatZaProdaju() {
    const podaci = {
      namena: 'Prodaja'
    }
    return this.http.post(`${this.uri}/procenat/dohvatiProcenat`, podaci);
  }

  dohvatiProcenatZaIzdavanje() {
    const podaci = {
      namena: 'Izdavanje'
    }
    return this.http.post(`${this.uri}/procenat/dohvatiProcenat`, podaci);
  }

}
