import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Korisnik } from '../models/korisnik';
import { Nekretnina } from '../models/nekretnina';
import { NekretninaService } from '../nekretnina.service';

@Component({
  selector: 'app-pregled-nekretnina',
  templateUrl: './pregled-nekretnina.component.html',
  styleUrls: ['./pregled-nekretnina.component.css']
})
export class PregledNekretninaComponent implements OnInit {

  constructor(private nekretninaService: NekretninaService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.dohvatiNekretnine();
  }

  nekretnine: Nekretnina[];

  grad: string;
  cenaOd: number;
  cenaDo: number;

  dohvatiNekretnine(): void {
    let korisnik: Korisnik = JSON.parse(localStorage.getItem('ulogovan'));
    korisnik == null ? this.dohvatiOdobreneNekretnine() : (korisnik.tip == 'administrator') ? this.dohvatiNeodobreneNekretnine() : this.dohvatiSveNekretnine();
  }

  dohvatiSveNekretnine() {
    this.nekretninaService.dohvatiSveNekretnine().subscribe((nekretnine: Nekretnina[]) => {
      this.nekretnine = nekretnine;
    })
  }

  dohvatiNeodobreneNekretnine() {
    this.nekretninaService.dohvatiNeodobreneNekretnine().subscribe((nekretnine: Nekretnina[]) => {
      this.nekretnine = nekretnine;
    })
  }

  dohvatiOdobreneNekretnine() {
    this.nekretninaService.dohvatiOdobreneNekretnine().subscribe((nekretnine: Nekretnina[]) => {
      this.nekretnine = nekretnine;
    })
  }

  tipKorisnika(): string {
    if(!JSON.parse(localStorage.getItem('ulogovan'))) {
      return 'gost';
    } else {
      return JSON.parse(localStorage.getItem('ulogovan')).tip;
    }
  }

  odobri(nekretnina: Nekretnina) {
    this.nekretninaService.odobriNekretninu(nekretnina.idN).subscribe();
    this.dohvatiNekretnine();
  }

  promovisi(nekretnina: Nekretnina) {
    this.nekretninaService.promovisiNekretninu(nekretnina.idN).subscribe();
    this.dohvatiNekretnine();
  }

  ukloniIzPromovisanih(nekretnina: Nekretnina) {
    this.nekretninaService.ukloniIzPromovisanih(nekretnina.idN).subscribe();
    this.dohvatiNekretnine();
  }

  slucajnaSlika(nekretnina: Nekretnina): string {
    return nekretnina.galerija[1];
  }

  pretrazi() {
    if(!this.grad && !this.cenaOd && !this.cenaDo) {
      this.otvoriSnackBar('Unesite barem jedan od parametara!');
    } else {
      this.nekretninaService.pretraziNekretnine(this.grad, this.cenaOd, this.cenaDo).subscribe((nekretnine: Nekretnina[]) => {
        this.nekretnine = nekretnine;
      })
    }
  }

  otvoriSnackBar(poruka) {
    this.snackBar.open(poruka, '', {duration: 3000});
  }

}
