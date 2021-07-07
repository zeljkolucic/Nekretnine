import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Korisnik } from '../models/korisnik';
import { NekretninaService } from '../nekretnina.service';

@Component({
  selector: 'app-dodavanje-nekretnine',
  templateUrl: './dodavanje-nekretnine.component.html',
  styleUrls: ['./dodavanje-nekretnine.component.css']
})
export class DodavanjeNekretnineComponent implements OnInit {

  constructor(private nekretninaService: NekretninaService, private router: Router) { }

  ngOnInit(): void {
    this.korisnik = JSON.parse(localStorage.getItem('ulogovan'));
  }

  naziv: string;
  adresa: string;
  tipNekretnine: string;
  sprat: string;
  povrsina: number;
  brojSoba: string;
  namestena: boolean;
  galerija: string[];
  tipOglasa: string;
  cena: number;
  vlasnik: string;

  korisnik: Korisnik;

  poruka: string;

  dodajNekretninu() {
    if(!this.naziv || !this.adresa || !this.tipNekretnine || !this.sprat || !this.povrsina || !this.brojSoba || 
        !this.namestena || !this.tipOglasa || !this.cena) {
      this.poruka = 'Unesite sve podatke!';
      let toast = document.getElementById('snackbar');
      toast.className = 'showRed';
      setTimeout(function(){toast.className = toast.className.replace('showRed', ''); }, 3000);
    } else {
      if(this.korisnik.tip == 'radnik agencije') {
        this.vlasnik = 'Agencija';
      } else {
        this.vlasnik = this.korisnik.korisnickoIme;
      }
      this.nekretninaService.dodajNekretninu(this.naziv, this.adresa, this.tipNekretnine, 
          this.sprat, this.povrsina, this.brojSoba, this.namestena, this.tipOglasa, this.cena, this.vlasnik).subscribe();
      this.poruka = 'Nekretnina uspesno dodata.';
      let toast = document.getElementById('snackbar');
      toast.className = 'showGreen';
      setTimeout(function(){toast.className = toast.className.replace('showGreen', ''); }, 3000);
      this.nazad();
    }
}

  nazad() {
    if(this.korisnik.tip == 'administrator') {
      this.router.navigate(['administrator']);
    } else if(this.korisnik.tip == 'radnik agencije') {
      this.router.navigate(['radnikAgencije']);
    } else {
      this.router.navigate(['registrovaniKorisnik']);
    }
  }

}
