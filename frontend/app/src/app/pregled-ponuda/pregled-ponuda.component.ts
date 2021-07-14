import { Component, OnInit } from '@angular/core';
import { Korisnik } from '../models/korisnik';
import { Nekretnina } from '../models/nekretnina';
import { Ponuda } from '../models/ponuda';
import { NekretninaService } from '../nekretnina.service';
import { PonudaService } from '../ponuda.service';

@Component({
  selector: 'app-pregled-ponuda',
  templateUrl: './pregled-ponuda.component.html',
  styleUrls: ['./pregled-ponuda.component.css']
})
export class PregledPonudaComponent implements OnInit {

  constructor(private ponudaService: PonudaService, private nekretninaService: NekretninaService) { }

  ngOnInit(): void {
    this.dohvatiPonude();
  }

  ponude: Ponuda[];
  kolone: string[] = ['nekretnina', 'cena', 'ponudjac', 'prihvati', 'odbij'];

  dohvatiPonude() {
    let korisnik: Korisnik = JSON.parse(localStorage.getItem('ulogovan'));
    let korisnickoIme = korisnik.tip == 'radnik agencije' ? 'Agencija' : korisnik.korisnickoIme;
    this.ponudaService.dohvatiPonude(korisnickoIme).subscribe((ponude: Ponuda[]) => {
      this.ponude = ponude;
    })
  }

  prihvatiPonudu(ponuda: Ponuda) {
    this.ponudaService.prihvatiPonudu(ponuda.idP).subscribe( () =>
      this.ponudaService.odbijOstalePonude(ponuda.idN).subscribe()
    );
    location.reload();
  }

  odbijPonudu(ponuda: Ponuda) {
    this.ponudaService.odbijPonudu(ponuda.idP).subscribe();
    location.reload();
  }

  dohvatiNekretninuPoId(idN): string {
    this.nekretninaService.dohvatiNekretninuPoId(idN).subscribe((nekretnina: Nekretnina) => {
      return nekretnina.naziv;
    })
    return null;
  }

}
