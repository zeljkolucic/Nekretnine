import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Korisnik } from '../models/korisnik';
import { NekretninaService } from '../nekretnina.service';

@Component({
  selector: 'app-dodavanje-nekretnine',
  templateUrl: './dodavanje-nekretnine.component.html',
  styleUrls: ['./dodavanje-nekretnine.component.css']
})
export class DodavanjeNekretnineComponent implements OnInit {

  constructor(private http: HttpClient, private nekretninaService: NekretninaService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.korisnik = JSON.parse(localStorage.getItem('ulogovan'));
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
  vlasnik: string;

  korisnik: Korisnik;

  dodajNekretninu() {
    if(!this.naziv || !this.adresa || !this.tipNekretnine || !this.brojSpratova || !this.povrsina || !this.brojSoba || 
        !this.namestena || !this.tipOglasa || !this.cena || this.galerija.length < 3) {
      this.prikaziSnackBar('Unesite sve podatke!');
    } else {
      if(this.korisnik.tip == 'radnik agencije') {
        this.vlasnik = 'Agencija';
      } else {
        this.vlasnik = this.korisnik.korisnickoIme;
      }
      const formData = new FormData();
      for(let slika of this.slike) {
        formData.append('files', slika);
      }
      this.http.post<any>('http://localhost:4000/files', formData).subscribe(
        (res) => console.log(res),
        (err) => console.log(err)
      );
      this.nekretninaService.dodajNekretninu(this.naziv, this.adresa, this.opstina, this.grad, this.tipNekretnine, this.brojSpratova,
          this.sprat, this.povrsina, this.brojSoba, this.namestena, this.tipOglasa, this.cena, this.vlasnik, this.galerija).subscribe();
      this.prikaziSnackBar('Nekretnina uspesno dodata.');
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
      let toast = document.getElementById('snackbar');
      toast.className = 'showRed';
      setTimeout(function(){toast.className = toast.className.replace('showRed', ''); }, 3000);
    }
  }

  prikaziSnackBar(poruka: string) {
    this.snackBar.open(poruka, '', {duration: 3000});
  }

}
