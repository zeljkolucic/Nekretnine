import { Component, OnInit } from '@angular/core';
import { Nekretnina } from '../models/nekretnina';
import { NekretninaService } from '../nekretnina.service';

@Component({
  selector: 'app-pregled-nekretnina',
  templateUrl: './pregled-nekretnina.component.html',
  styleUrls: ['./pregled-nekretnina.component.css']
})
export class PregledNekretninaComponent implements OnInit {

  constructor(private nekretninaService: NekretninaService) { }

  ngOnInit(): void {
  }

  nekretnine: Nekretnina[];

  dohvatiSveNekretnine() {
    this.nekretninaService.dohvatiNeodobreneNekretnine().subscribe((nekretnine: Nekretnina[]) => {
      this.nekretnine = nekretnine;
    })
  }

  odobri(nekretnina: Nekretnina) {
    this.nekretninaService.odobriNekretninu(nekretnina.idN).subscribe();
    location.reload();
  }

}
