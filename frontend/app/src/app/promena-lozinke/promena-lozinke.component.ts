import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { KorisnikService } from '../korisnik.service';
import { Korisnik } from '../models/korisnik';

@Component({
  selector: 'app-promena-lozinke',
  templateUrl: './promena-lozinke.component.html',
  styleUrls: ['./promena-lozinke.component.css']
})
export class PromenaLozinkeComponent implements OnInit {

  constructor(private router: Router, private korisnikService: KorisnikService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.korisnik = JSON.parse(localStorage.getItem('ulogovan'));
  }

  korisnik: Korisnik;
  staraLozinka: string;
  novaLozinka: string;
  potvrdaLozinke: string;

  poruka: string;

  potvrdi() {
    if(!this.staraLozinka || !this.novaLozinka || !this.potvrdaLozinke) {
      this.prikaziSnackBar('Sva polja su obavezna!');
    } else {
      let regexLozinka = /^(?!.*([A-Za-z0-9!@#$%^&*()_+{}[\]|\\\/?.,><:"';])\1{3})(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}[\]|\\\/?.,><:"';])[A-Za-z\d!@#$%^&*()_+{}[\]|\\\/?.,><:"';]{8,24}$/;
      if(this.staraLozinka != this.korisnik.lozinka) {
        this.prikaziSnackBar('Uneli ste pogresnu lozinku!');
      } else if(this.staraLozinka == this.novaLozinka) {
        this.prikaziSnackBar('Nova lozinka ne moze biti stara lozinka!');
      } else if(!regexLozinka.test(this.novaLozinka)) {
        this.prikaziSnackBar('Nova lozinka nije dovoljno jaka!');
      } else if(this.novaLozinka != this.potvrdaLozinke) {
        this.prikaziSnackBar('Lozinke se ne podudaraju!');
      } else {
        this.korisnikService.promeniLozinku(this.korisnik.korisnickoIme, this.novaLozinka).subscribe();
        this.poruka = '';
        localStorage.removeItem('ulogovan');
        this.router.navigate(['prijava']);
      }
    }
  }

  prikaziSnackBar(poruka: string) {
    this.snackBar.open(poruka, '', {duration: 3000});
  }

}
