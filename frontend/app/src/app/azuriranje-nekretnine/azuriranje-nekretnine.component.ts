import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Korisnik } from '../models/korisnik';
import { Nekretnina } from '../models/nekretnina';
import { NekretninaService } from '../nekretnina.service';

@Component({
  selector: 'app-azuriranje-nekretnine',
  templateUrl: './azuriranje-nekretnine.component.html',
  styleUrls: ['./azuriranje-nekretnine.component.css']
})
export class AzuriranjeNekretnineComponent implements OnInit {

  constructor(private http: HttpClient, private nekretninaService: NekretninaService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.nekretnina = JSON.parse(localStorage.getItem('nekretninaZaAzuriranje'));
    this.naziv = this.nekretnina.naziv;
    this.adresa = this.nekretnina.adresa;
    this.opstina = this.nekretnina.opstina;
    this.grad = this.nekretnina.grad;
    this.tipNekretnine = this.nekretnina.tipNekretnine;
    this.brojSpratova = this.nekretnina.brojSpratova;
    this.sprat = this.nekretnina.sprat;
    this.povrsina = this.nekretnina.povrsina;
    this.brojSoba = this.nekretnina.brojSoba;
    this.namestena = this.nekretnina.namestena;
    this.galerija = this.nekretnina.galerija;
    this.tipOglasa = this.nekretnina.tipOglasa;
    this.cena = this.nekretnina.cena;
  }

  naziv: string;
  adresa: string;
  opstina: string;
  grad: string;
  tipNekretnine: string;
  brojSpratova: number;
  sprat: number;
  povrsina: number;
  brojSoba: string;
  namestena: boolean;
  galerija: string[] = [];
  slike = [];
  tipOglasa: string;
  cena: number;

  nekretnina: Nekretnina;

  poruka: string;

  azurirajNekretninu() {
    if(!this.naziv || !this.adresa || !this.tipNekretnine || !this.brojSpratova || !this.povrsina || !this.brojSoba || 
        !this.namestena || !this.tipOglasa || !this.cena) {
      this.prikaziSnackBar('Unesite sve podatke!');
    } else {
      const formData = new FormData();
      for(let slika of this.slike) {
        formData.append('files', slika);
      }
      this.http.post<any>('http://localhost:4000/files', formData).subscribe(
        (res) => console.log(res),
        (err) => console.log(err)
      );
      this.nekretninaService.azurirajNekretninu(this.nekretnina.idN, this.naziv, this.adresa, this.opstina, this.grad, this.tipNekretnine, this.brojSpratova,
          this.sprat, this.povrsina, this.brojSoba, this.namestena, this.tipOglasa, this.cena, this.galerija).subscribe();
      this.prikaziSnackBar('Nekretnina uspesno azurirana.');
    }
  }

  odaberiSlike(event) {
    if(event.target.files.length > 2) {
      this.slike = event.target.files;
      for(let i = 0; i < event.target.files.length; i++) {
        this.galerija[i] = '../assets/' + event.target.files[i].name;
      }
    } else {
      this.prikaziSnackBar('Izaberite barem 3 slike!');
    }
  }

  prikaziSnackBar(poruka: string) {
    this.snackBar.open(poruka, '', {duration: 3000});
  }

}
