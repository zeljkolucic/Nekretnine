import { HttpClient } from '@angular/common/http';
import { asLiteral } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { KorisnikService } from '../korisnik.service';
import { Korisnik } from '../models/korisnik';
import { ZahtevService } from '../zahtev.service';

@Component({
  selector: 'app-registracija',
  templateUrl: './registracija.component.html',
  styleUrls: ['./registracija.component.css']
})
export class RegistracijaComponent implements OnInit {

  constructor(private http: HttpClient, private korisnikService: KorisnikService, private zahtevService: ZahtevService, 
    private snackBar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {

  }

  ime: string;
  prezime: string;
  korisnickoIme: string;
  lozinka: string;
  potvrdaLozinke: string;
  slika: string;
  fajlSlika;
  adresa: string;
  gradDrzava: string;

  registracija() {
    if(!this.ime || !this.prezime || !this.korisnickoIme || !this.lozinka || !this.potvrdaLozinke || !this.adresa || !this.gradDrzava) {
      this.prikaziSnackBar('Unesite preostala polja!');
    } else {
      this.korisnikService.dohvatiKorisnika(this.korisnickoIme).subscribe((korisnik: Korisnik) => {
        if(korisnik) {
          this.prikaziSnackBar('Korisnicko ime je zauzeto!');
        } else {
          let regexLozinka = /^(?!.*([A-Za-z0-9!@#$%^&*()_+{}[\]|\\\/?.,><:"';])\1{3})(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}[\]|\\\/?.,><:"';])[A-Za-z\d!@#$%^&*()_+{}[\]|\\\/?.,><:"';]{8,24}$/;
          if(!regexLozinka.test(this.lozinka)) {
            this.prikaziSnackBar('Lozinka nije dovoljno jaka!');
          } else if(this.lozinka != this.potvrdaLozinke) {
            this.prikaziSnackBar('Lozinke se ne podudaraju!');
          } else {
            if(!this.slika) 
              this.slika = 'podrazumevano.png'; 
            this.slika = '../assets/' + this.slika;
            
            const formData = new FormData();
            formData.append('file', this.fajlSlika);

            this.http.post<any>('http://localhost:4000/file', formData).subscribe(
              (res) => this.slika = res,
              (err) => console.log(err)
            );
            this.prikaziSnackBar('Zahtev za registracijom uspesno poslat!');
            this.zahtevService.dodajZahtev(this.ime, this.prezime, this.korisnickoIme, this.lozinka, this.slika, this.adresa, this.gradDrzava).subscribe((err) => {
              if(err) console.log(err);
            })
          }
        }
      })
    }
  }

  odaberiSlike(event) {
    if(event.target.files.length > 0) {
      const file = event.target.files[0];
      this.fajlSlika = file;
      this.slika = '../assets/' + event.target.files[0].name;
    }
  }

  prikaziSnackBar(poruka) {
    this.snackBar.open(poruka, '', {duration: 3000});
  }

  idiNaPrijavu() {
    this.router.navigate(['prijava']);
  }

  idiNaNekretnine() {
    this.router.navigate(['pregledNekretnina']);
  }

  idiNaRegistraciju() {
    this.router.navigate(['registracija']);
  }

}
