import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { KorisnikService } from '../korisnik.service';
import { Korisnik } from '../models/korisnik';

@Component({
  selector: 'app-prijava',
  templateUrl: './prijava.component.html',
  styleUrls: ['./prijava.component.css']
})
export class PrijavaComponent implements OnInit {

  constructor(private korisnikService: KorisnikService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {

  }

  korisnickoIme: string;
  lozinka: string;
  tip: string;

  prijava() {
    if(!this.korisnickoIme || !this.lozinka || !this.tip) {
      this.prikaziSnackBar('Popunite preostala polja!');
    } else {
      this.korisnikService.prijava(this.korisnickoIme, this.lozinka, this.tip).subscribe((korisnik: Korisnik) => {
        if(korisnik) {
          localStorage.setItem('ulogovan', JSON.stringify(korisnik));
          if(korisnik.tip == 'registrovani korisnik') {
            this.router.navigate(['registrovaniKorisnik']);
          } else if(korisnik.tip == 'radnik agencije') {
            this.router.navigate(['radnikAgencije']);
          } else if(korisnik.tip == 'administrator') {
            this.router.navigate(['administrator']);
          }
        } else {
          this.prikaziSnackBar('Pogresni pristupni podaci!');
        }
      })
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
