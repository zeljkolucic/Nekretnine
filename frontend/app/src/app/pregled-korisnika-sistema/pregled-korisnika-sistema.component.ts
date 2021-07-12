import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { KorisnikService } from '../korisnik.service';
import { Korisnik } from '../models/korisnik';

@Component({
  selector: 'app-pregled-korisnika-sistema',
  templateUrl: './pregled-korisnika-sistema.component.html',
  styleUrls: ['./pregled-korisnika-sistema.component.css']
})
export class PregledKorisnikaSistemaComponent implements OnInit {

  constructor(private korisnikService: KorisnikService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.dohvatiSveKorisnike();
  }

  korisnici: Korisnik[];
  kolone: string[] = ['slika', 'ime', 'prezime', 'korisnickoIme', 'lozinka', 'adresa', 'gradDrzava', 'azuriraj', 'obrisi'];

  dohvatiSveKorisnike() {
    this.korisnikService.dohvatiSveKorisnike().subscribe((korisnici: Korisnik[]) => {
      this.korisnici = korisnici;
    })
  }

  azuriraj(korisnik: Korisnik) {
    localStorage.setItem('korisnikZaAzuriranje', JSON.stringify(korisnik));
    this.router.navigate(['administrator/azuriranjeKorisnika']);
  }

  obrisi(korisnik: Korisnik) {
    this.korisnikService.ukloniKorisnika(korisnik.korisnickoIme).subscribe();
    location.reload();
  }

}
