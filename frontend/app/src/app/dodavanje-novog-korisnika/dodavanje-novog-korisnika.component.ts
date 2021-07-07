import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KorisnikService } from '../korisnik.service';
import { Korisnik } from '../models/korisnik';

@Component({
  selector: 'app-dodavanje-novog-korisnika',
  templateUrl: './dodavanje-novog-korisnika.component.html',
  styleUrls: ['./dodavanje-novog-korisnika.component.css']
})
export class DodavanjeNovogKorisnikaComponent implements OnInit {

  constructor(private router: Router, private korisnikService: KorisnikService) { }

  ngOnInit(): void {
  }

  ime: string;
  prezime: string;
  korisnickoIme: string;
  lozinka: string;
  potvrdaLozinke: string;
  slika: string;
  adresa: string;
  gradDrzava: string;
  tip: string;

  poruka: string;

  registracija() {
    if(!this.ime || !this.prezime || !this.korisnickoIme || !this.lozinka || !this.potvrdaLozinke || !this.adresa || !this.gradDrzava || !this.tip) {
      this.poruka = 'Unesite sve podatke!';
    } else {
      this.korisnikService.dohvatiKorisnika(this.korisnickoIme).subscribe((korisnik: Korisnik) => {
        if(korisnik) {
          this.poruka = 'Korisnicko ime je zauzeto!';
        } else {
          let regexLozinka = /^(?!.*([A-Za-z0-9!@#$%^&*()_+{}[\]|\\\/?.,><:"';])\1{3})(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}[\]|\\\/?.,><:"';])[A-Za-z\d!@#$%^&*()_+{}[\]|\\\/?.,><:"';]{8,24}$/;
          let regexEmail = /^\w{4,}@\w+\.\w{2,3}$/;
          if(!regexLozinka.test(this.lozinka)) {
            this.poruka = 'Lozinka nije dovoljno jaka!';
          } else if(this.lozinka != this.potvrdaLozinke) {
            this.poruka = 'Lozinke se ne podudaraju!';
          } else if(!regexEmail.test(this.adresa)) {
            this.poruka = 'Email nije u odgovarajucem formatu!';
          } else {
            this.poruka = 'Korisnik uspesno dodat!';
            this.korisnikService.dodajKorisnika(this.ime, this.prezime, this.korisnickoIme, this.lozinka, this.slika, this.adresa, this.gradDrzava, this.tip).subscribe();
            this.router.navigate(['administrator']);
          }
        }
      })
    }
  }

}
