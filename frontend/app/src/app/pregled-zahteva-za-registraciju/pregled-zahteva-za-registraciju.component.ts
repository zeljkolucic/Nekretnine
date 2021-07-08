import { Component, OnInit } from '@angular/core';
import { KorisnikService } from '../korisnik.service';
import { Zahtev } from '../models/zahtev';
import { ZahtevService } from '../zahtev.service';

@Component({
  selector: 'app-pregled-zahteva-za-registraciju',
  templateUrl: './pregled-zahteva-za-registraciju.component.html',
  styleUrls: ['./pregled-zahteva-za-registraciju.component.css']
})
export class PregledZahtevaZaRegistracijuComponent implements OnInit {

  constructor(private zahtevService: ZahtevService, private korisnikService: KorisnikService) { }

  ngOnInit(): void {
    this.dohvatiSveZahteve();
  }

  zahtevi: Zahtev[];
  kolone: string[] = ['slika', 'ime', 'prezime', 'korisnickoIme', 'lozinka', 'adresa', 'gradDrzava', 'prihvati', 'odbij'];

  dohvatiSveZahteve() {
    this.zahtevService.dohvatiZahteve().subscribe((zahtevi: Zahtev[]) => {
      this.zahtevi = zahtevi;
    })
  }

  prihvati(zahtev: Zahtev) {
    this.korisnikService.dodajKorisnika(zahtev.ime, zahtev.prezime, zahtev.korisnickoIme, zahtev.lozinka, zahtev.slika, zahtev.adresa, zahtev.gradDrzava, '').subscribe();
    this.zahtevService.ukloniZahtev(zahtev).subscribe();
    this.dohvatiSveZahteve();
  }

  odbij(zahtev: Zahtev) {
    this.zahtevService.ukloniZahtev(zahtev).subscribe();
    this.dohvatiSveZahteve();
  }

}
