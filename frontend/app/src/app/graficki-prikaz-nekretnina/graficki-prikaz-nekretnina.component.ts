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

  constructor(private nekretninaService: NekretninaService) { }

  ngOnInit(): void {
    this.dohvatiSveNekretnine();
    this.brojKucaKojeSeIzdaju();
    this.brojKucaKojeSeProdaju();
    this.brojStanovaKojiSeIzdaju();
    this.brojStanovaKojiSeProdaju();
  }

  nekretnine: Nekretnina[];
  data1: number[] = [];

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
        this.nekretninaService.dohvatiBrojNekretninaUGradu(this.nekretnine[i].grad).subscribe((broj: number) => {
          
        })
      }
    }
    this.barChartLabels1 = gradovi;
    let d = {
      data: this.data1,
      label: "Broj nekretnina po gradovima",
      backgroundColor: ['blue']
    }
    this.barChartData1.push(d);
  }

  brojKucaKojeSeIzdaju() {
    let brojKucaKojeSeIzdaju: number[] = [];
    this.nekretninaService.dohvatiBrojKucaKojeSeIzdaju().subscribe((broj: number) => {
      brojKucaKojeSeIzdaju.push(broj);
    })
    let data2 = {
      data: brojKucaKojeSeIzdaju,
      label: "Broj kuca koje se izdaju",
      backgroundColor: ['blue']
    }
    this.barChartData2.push(data2);
  }

  brojKucaKojeSeProdaju() {
    let brojKucaKojeSeProdaju: number = 0;
    this.nekretninaService.dohvatiBrojKucaKojeSeProdaju().subscribe((broj: number) => {
      brojKucaKojeSeProdaju = broj;
    })
    let data3 = {
      data: brojKucaKojeSeProdaju,
      label: "Broj kuca koje se prodaju",
      backgroundColor: ['blue']
    }
    this.barChartData2.push(data3);
  }

  brojStanovaKojiSeIzdaju() {
    let brojStanovaKojiSeIzdaju: number[] = [];
    this.nekretninaService.dohvatiBrojStanovaKojiSeIzdaju().subscribe((broj: number) => {
      brojStanovaKojiSeIzdaju.push(broj);
      console.log(brojStanovaKojiSeIzdaju[0]);
      let data4 = {
        data: brojStanovaKojiSeIzdaju,
        label: "Broj stanova koji se izdaju",
        backgroundColor: ['blue']
      }
      this.barChartData3.push(data4);
      console.log(this.barChartData3[0].data[0]);
    })
    
  }

  brojStanovaKojiSeProdaju() {
    let brojStanovaKojiSeProdaju: number[] = [];
    this.nekretninaService.dohvatiBrojStanovaKojiSeProdaju().subscribe((broj: number) => {
      brojStanovaKojiSeProdaju.push(broj);
      let data5 = {
        data: brojStanovaKojiSeProdaju,
        label: "Broj stanova koji se prodaju",
        backgroundColor: ['blue']
      }
      this.barChartData3.push(data5);
    })
    
  }

}
