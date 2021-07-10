import { Component, OnInit } from '@angular/core';
import { Korisnik } from '../models/korisnik';
import { Poruka } from '../models/poruka';
import { PorukaService } from '../poruka.service';

@Component({
  selector: 'app-pregled-poruka',
  templateUrl: './pregled-poruka.component.html',
  styleUrls: ['./pregled-poruka.component.css']
})
export class PregledPorukaComponent implements OnInit {

  constructor(private porukaService: PorukaService) { }

  ngOnInit(): void {
    this.korisnik = JSON.parse(localStorage.getItem('ulogovan'));
    this.dohvatiMojeArhiviranePoruke();
  }

  korisnik: Korisnik;
  poruke: Poruka[];
  kolone: string[] = ['naslov', 'tekst', 'posiljalac', 'datum', 'arhiviraj'];

  dohvatiMojePoruke() {
    this.porukaService.dohvatiMojePoruke(this.korisnik.korisnickoIme).subscribe((poruke: Poruka[]) => {
      this.poruke = poruke;
    })
  }

  dohvatiMojeArhiviranePoruke() {
    this.porukaService.dohvatiMojeArhiviranePoruke(this.korisnik.korisnickoIme).subscribe((poruke: Poruka[]) => {
      this.poruke = poruke;
    })
  }

  arhiviraj(poruka: Poruka) {
    this.porukaService.arhivirajPoruku(poruka.idP).subscribe();
  }

}
