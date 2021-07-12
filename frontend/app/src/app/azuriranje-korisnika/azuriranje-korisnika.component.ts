import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { KorisnikService } from '../korisnik.service';
import { Korisnik } from '../models/korisnik';

@Component({
  selector: 'app-azuriranje-korisnika',
  templateUrl: './azuriranje-korisnika.component.html',
  styleUrls: ['./azuriranje-korisnika.component.css']
})
export class AzuriranjeKorisnikaComponent implements OnInit {

  constructor(private korisnikService: KorisnikService, private router: Router, private snackBar: MatSnackBar, private http: HttpClient) { }

  ngOnInit(): void {
    this.korisnik = JSON.parse(localStorage.getItem('korisnikZaAzuriranje'));
    this.ime = this.korisnik.ime;
    this.prezime = this.korisnik.prezime;
    this.korisnickoIme = this.korisnik.korisnickoIme;
    this.lozinka = this.korisnik.lozinka;
    this.adresa = this.korisnik.adresa;
    this.gradDrzava = this.korisnik.gradDrzava;
  }

  korisnik: Korisnik;

  ime: string;
  prezime: string;
  korisnickoIme: string;
  lozinka: string;
  slika: string;
  fajlSlika;
  adresa: string;
  gradDrzava: string;

  poruka: string;

  azuriraj() {
    this.korisnikService.dohvatiKorisnika(this.korisnickoIme).subscribe((korisnik:Korisnik) => {
      if(korisnik.idK != this.korisnik.idK) {
        this.prikaziSnackBar('Korisnicko ime je zauzeto!');
      } else {
        if(!this.slika) 
            this.slika = 'podrazumevano.png'; 
        this.slika = '../assets/' + this.slika;
        this.prikaziSnackBar('Korisnik uspesno azuriran!');
        const formData = new FormData();
        formData.append('file', this.fajlSlika);

        this.http.post<any>('http://localhost:4000/file', formData).subscribe(
          (res) => this.slika = res,
          (err) => console.log(err)
        );
        this.korisnikService.azurirajKorisnika(this.korisnik.korisnickoIme, this.korisnickoIme, this.lozinka, this.ime, 
            this.prezime, this.slika, this.adresa, this.gradDrzava).subscribe();
        localStorage.removeItem('korisnikZaAzuriranje');
        this.router.navigate(['administrator']);
      }
    })
  }

  odaberiSliku(event) {
    if(event.target.files.length > 0) {
      const file = event.target.files[0];
      this.fajlSlika = file;
      this.slika = '../assets/' + event.target.files[0].name;
    }
  }

  prikaziSnackBar(poruka: string) {
    this.snackBar.open(poruka, '', {duration: 3000});
  }

}
