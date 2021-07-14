import { Component, OnInit } from '@angular/core';
import { Procenat } from '../models/procenat';
import { ProcenatService } from '../procenat.service';

@Component({
  selector: 'app-procenat-agencije',
  templateUrl: './procenat-agencije.component.html',
  styleUrls: ['./procenat-agencije.component.css']
})
export class ProcenatAgencijeComponent implements OnInit {

  constructor(private procenatService: ProcenatService) { }

  ngOnInit(): void {
    this.procenatService.dohvatiProcenatZaProdaju().subscribe((procenat: Procenat) => {
      this.procenatZaProdaju = procenat.iznos;
    });
    this.procenatService.dohvatiProcenatZaIzdavanje().subscribe((procenat: Procenat) => {
      this.procenatZaIzdavanje = procenat.iznos;
    });
  }

  procenatZaProdaju: number;
  procenatZaIzdavanje: number;

  definisi() {
    this.procenatService.postaviProcenatZaProdaju(this.procenatZaProdaju).subscribe();
    this.procenatService.postaviProcenatZaIzdavanje(this.procenatZaIzdavanje).subscribe();
  }

}
