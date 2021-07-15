import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KorisnikService } from '../korisnik.service';
import { Korisnik } from '../models/korisnik';

@Component({
  selector: 'app-registrovani-korisnik',
  templateUrl: './registrovani-korisnik.component.html',
  styleUrls: ['./registrovani-korisnik.component.css']
})
export class RegistrovaniKorisnikComponent implements OnInit {

  constructor(private router : Router, private korisnikService: KorisnikService) { }

  ngOnInit(): void {
    this.korisnik = JSON.parse(localStorage.getItem('ulogovan'));
  }

  korisnik: Korisnik;

  azuriraj() {
    localStorage.setItem('korisnikZaAzuriranje', JSON.stringify(this.korisnik));
    this.router.navigate(['registrovaniKorisnik/azuriranjeKorisnika']);
  }

  odjaviSe() {
    localStorage.removeItem('ulogovan');
    this.router.navigate(['']);
  }

}
