import { Component, OnInit } from '@angular/core';
import { Ponuda } from '../models/ponuda';
import { Procenat } from '../models/procenat';
import { PonudaService } from '../ponuda.service';
import { ProcenatService } from '../procenat.service';

@Component({
  selector: 'app-ugovorene-prodaje',
  templateUrl: './ugovorene-prodaje.component.html',
  styleUrls: ['./ugovorene-prodaje.component.css']
})
export class UgovoreneProdajeComponent implements OnInit {

  constructor(private ponudaService: PonudaService, private procenatService: ProcenatService) { }

  ngOnInit(): void {
    this.dohvatiUgovoreneProdaje();
  }

  ugovoreneProdaje: Ponuda[];
  kolone: string[] = ['nekretnina', 'cena', 'tipOglasa', 'ponudjac', 'vlasnik'];
  prihod: number;
  procenatZaProdaju: number;
  procenatZaIzdavanje: number;

  dohvatiUgovoreneProdaje() {
    this.ponudaService.dohvatiUgovoreneProdaje().subscribe((ugovoreneProdaje: Ponuda[]) => {
      this.ugovoreneProdaje = ugovoreneProdaje;
      this.dohvatiProcente();
    })
  }

  dohvatiProcente() {
    this.procenatService.dohvatiProcenatZaProdaju().subscribe((procenat: Procenat) => {
      this.procenatZaProdaju = procenat.iznos; 
      this.procenatService.dohvatiProcenatZaIzdavanje().subscribe((procenat: Procenat) => {
        this.procenatZaIzdavanje = procenat.iznos;
        this.izracunajPrihod();
      })
    })
  }

  izracunajPrihod() {
    this.prihod = 0;
    for(let u of this.ugovoreneProdaje) {
      if(u.vlasnik == 'Agencija') {
        this.prihod += u.cena;
      } else {
        if(u.tipOglasa == 'Prodaja') {
          this.prihod += u.cena * (this.procenatZaProdaju / 100);
        } else if(u.tipOglasa == 'Izdavanje') {
          this.prihod += u.cena * (this.procenatZaIzdavanje / 100);
        }
      }
    }
  }



}
