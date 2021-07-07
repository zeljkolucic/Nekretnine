import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KorisnikService } from '../korisnik.service';
import { Korisnik } from '../models/korisnik';

@Component({
  selector: 'app-azuriranje-korisnika',
  templateUrl: './azuriranje-korisnika.component.html',
  styleUrls: ['./azuriranje-korisnika.component.css']
})
export class AzuriranjeKorisnikaComponent implements OnInit {

  constructor(private korisnikService: KorisnikService, private router: Router) { }

  ngOnInit(): void {
    this.korisnik = JSON.parse(localStorage.getItem('korisnikZaAzuriranje'));
  }

  korisnik: Korisnik;

  ime: string;
  prezime: string;
  korisnickoIme: string;
  lozinka: string;
  slika: string;
  adresa: string;
  gradDrzava: string;

  poruka: string;

  azuriraj() {
    if(!this.korisnickoIme)
      this.korisnickoIme = this.korisnik.korisnickoIme;
    else {
      this.korisnikService.dohvatiKorisnika(this.korisnickoIme).subscribe((korisnik:Korisnik) => {
        if(korisnik) {
          this.poruka = 'Korisnicko ime je zauzeto!';
        } else {
          if(!this.ime)
          this.ime = this.korisnik.ime;
          if(!this.prezime)
            this.prezime = this.korisnik.prezime;
          if(!this.lozinka)
            this.lozinka = this.korisnik.lozinka;
          if(!this.slika)
            this.slika = this.korisnik.slika;
          if(!this.adresa)
            this.adresa = this.korisnik.adresa;
          if(!this.gradDrzava)
            this.gradDrzava = this.korisnik.gradDrzava;
          this.korisnikService.azurirajKorisnika(this.korisnik.korisnickoIme, this.korisnickoIme, this.lozinka, this.ime, 
              this.prezime, this.slika, this.adresa, this.gradDrzava).subscribe();
          localStorage.removeItem('korisnikZaAzuriranje');
          this.router.navigate(['administrator']);
        }
      })
    }
  }

  nazad() {
    localStorage.removeItem('korisnikZaAzuriranje');
    this.router.navigate(['administrator']);
  }

}
