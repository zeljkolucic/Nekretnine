import { Component, OnInit } from '@angular/core';
import { Korisnik } from '../models/korisnik';
import { Poruka } from '../models/poruka';
import { SanduceService } from '../sanduce.service';

@Component({
  selector: 'app-pregled-poruka',
  templateUrl: './pregled-poruka.component.html',
  styleUrls: ['./pregled-poruka.component.css']
})
export class PregledPorukaComponent implements OnInit {

  constructor(private sanduceService: SanduceService) { }

  ngOnInit(): void {
    this.korisnik = JSON.parse(localStorage.getItem('ulogovan'));
    this.dohvatiMojePoruke();
    this.sanduceService.dodajPonudu().subscribe();
  }

  korisnik: Korisnik;
  poruke: Poruka[];
  kolone: string[] = ['naslov', 'tekst', 'posiljalac', 'datum', 'arhiviraj'];

  dohvatiMojePoruke() {
    this.sanduceService.dohvatiMojePoruke(this.korisnik.korisnickoIme).subscribe((poruke: Poruka[]) => {
      this.poruke = poruke;
    })
  }

  arhiviraj(poruka: Poruka) {

  }

}
