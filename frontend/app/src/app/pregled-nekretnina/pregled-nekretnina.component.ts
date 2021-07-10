import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Korisnik } from '../models/korisnik';
import { Nekretnina } from '../models/nekretnina';
import { NekretninaService } from '../nekretnina.service';

@Component({
  selector: 'app-pregled-nekretnina',
  templateUrl: './pregled-nekretnina.component.html',
  styleUrls: ['./pregled-nekretnina.component.css']
})
export class PregledNekretninaComponent implements OnInit {

  constructor(private nekretninaService: NekretninaService, private snackBar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
    this.dohvatiNekretnine();
    this.dohvatiNekretnineZaGaleriju();
  }

  nekretnine: Nekretnina[];
  promovisaneNekretnine: Nekretnina[];

  naziv: string;
  grad: string;
  cenaOd: number;
  cenaDo: number;

  dohvatiNekretnine(): void {
    let korisnik: Korisnik = JSON.parse(localStorage.getItem('ulogovan'));
    if(korisnik == null) {
      this.dohvatiOdobreneNekretnine();
    } else if(korisnik.tip == 'administrator') {
      this.dohvatiNeodobreneNekretnine();
    } else if(korisnik.tip == 'radnik agencije') {
      this.dohvatiSveNekretnine();
    } else if(korisnik.tip == 'registrovani korisnik') {
      console.log(this.router.url);
      if(this.router.url === '/registrovaniKorisnik/pregledMojihNekretnina') {
        this.dohvatiMojeNekretnine(korisnik.korisnickoIme);
      } else {
        this.dohvatiOdobreneNekretnine();
      }
    }
  }

  prikazGalerijeZaRegistrovanogKorisnika(): boolean {
    return this.router.url === '/registrovaniKorisnik/pregledNekretnina';
  }

  pregledNekretnina(): boolean {
    return this.router.url === '/pregledNekretnina' || this.router.url === '/registrovaniKorisnik/pregledNekretnina' || 
      this.router.url === '/registrovaniKorisnik/pregledMojihNekretnina' || this.router.url === '/radnikAgencije/pregledNekretnina' ||
      this.router.url === '/administrator/pregledNekretnina' || this.router.url === '/';
  }

  dohvatiSveNekretnine() {
    this.nekretninaService.dohvatiSveNekretnine().subscribe((nekretnine: Nekretnina[]) => {
      this.nekretnine = nekretnine;
    })
  }

  dohvatiNekretnineZaGaleriju() {
    this.nekretninaService.dohvatiPromovisaneNekretnine().subscribe((nekretnine: Nekretnina[]) => {
      this.promovisaneNekretnine = nekretnine;
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

  dohvatiMojeNekretnine(korisnickoIme) {
    this.nekretninaService.dohvatiMojeNekretnine(korisnickoIme).subscribe((nekretnine: Nekretnina[]) => {
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
    if(!this.naziv && !this.grad && !this.cenaOd && !this.cenaDo) {
      this.otvoriSnackBar('Unesite barem jedan od parametara!');
    } else {
      this.nekretninaService.pretraziNekretnine(this.naziv, this.grad, this.cenaOd, this.cenaDo).subscribe((nekretnine: Nekretnina[]) => {
        this.nekretnine = nekretnine;
      })
    }
  }

  otvoriSnackBar(poruka) {
    this.snackBar.open(poruka, '', {duration: 3000});
  }

}
