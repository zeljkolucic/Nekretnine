import { Component, OnInit } from '@angular/core';
import { Nekretnina } from '../models/nekretnina';
import { NekretninaService } from '../nekretnina.service';

@Component({
  selector: 'app-graficki-prikaz-nekretnina',
  templateUrl: './graficki-prikaz-nekretnina.component.html',
  styleUrls: ['./graficki-prikaz-nekretnina.component.css']
})
export class GrafickiPrikazNekretninaComponent implements OnInit {

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  
  public barChartLegend = true;
  public barChartType = 'bar';

  public barChartLabels1 = [];
  public barChartData1 = [];

  public barChartLabels2 = [];
  public barChartData2 = [];

  public barChartLabels3 = [];
  public barChartData3 = [];

  public barChartLabels4 = [];
  public barChartData4 = [];

  public barChartLabels5 = [];
  public barChartData5 = [];

  constructor(private nekretninaService: NekretninaService) { }

  ngOnInit(): void {
    this.dohvatiSveNekretnine();
    //this.brojKucaKojeSeIzdaju();
    //this.brojKucaKojeSeProdaju();
    //this.brojStanovaKojiSeIzdaju();
    //this.brojStanovaKojiSeProdaju();
  }

  nekretnine: Nekretnina[];

  dohvatiSveNekretnine() {
    this.nekretninaService.dohvatiSveNekretnine().subscribe((nekretnine: Nekretnina[]) => {
      if(nekretnine) {
        this.nekretnine = nekretnine;
        this.brojNekretninaUGradu();
      }
    })
  }

  brojNekretninaUGradu() {
    let gradovi: string[] = [];
    let brojNekretninaPoGradovima: number[] = [];
    for(let i = 0; i < this.nekretnine.length; i++) {
      if(!gradovi.includes(this.nekretnine[i].grad)) {
        gradovi.push(this.nekretnine[i].grad);
        let brojNekretninaUGradu: number;
        this.nekretninaService.dohvatiBrojNekretninaUGradu(this.nekretnine[i].grad).subscribe((broj: number) => {
          brojNekretninaUGradu = broj;
        })
        brojNekretninaPoGradovima.push(brojNekretninaUGradu);
      }
    }
    let data = {
      data: brojNekretninaPoGradovima,
      label: "Broj nekretnina po gradovima"
    }
    this.barChartData1.push(data);
  }

  brojKucaKojeSeIzdaju() {
    let brojKucaKojeSeIzdaju: number = 0;
    this.nekretninaService.dohvatiBrojKucaKojeSeIzdaju().subscribe((broj: number) => {
      brojKucaKojeSeIzdaju = broj;
    })
    let data = {
      data: brojKucaKojeSeIzdaju,
      label: "Broj kuca koje se izdaju"
    }
    this.barChartData2.push(data);
  }

  brojKucaKojeSeProdaju() {
    let brojKucaKojeSeProdaju: number = 0;
    this.nekretninaService.dohvatiBrojKucaKojeSeProdaju().subscribe((broj: number) => {
      brojKucaKojeSeProdaju = broj;
    })
    let data = {
      data: brojKucaKojeSeProdaju,
      label: "Broj kuca koje se prodaju"
    }
    this.barChartData3.push(data);
  }

  brojStanovaKojiSeIzdaju() {
    let brojStanovaKojiSeIzdaju: number = 0;
    this.nekretninaService.dohvatiBrojStanovaKojiSeIzdaju().subscribe((broj: number) => {
      brojStanovaKojiSeIzdaju = broj;
    })
    let data = {
      data: brojStanovaKojiSeIzdaju,
      label: "Broj stanova koji se izdaju"
    }
    this.barChartData4.push(data);
  }

  brojStanovaKojiSeProdaju() {
    let brojStanovaKojiSeProdaju: number = 0;
    this.nekretninaService.dohvatiBrojStanovaKojiSeProdaju().subscribe((broj: number) => {
      brojStanovaKojiSeProdaju = broj;
    })
    let data = {
      data: brojStanovaKojiSeProdaju,
      label: "Broj stanova koji se izdaju"
    }
    this.barChartData5.push(data);
  }

}
