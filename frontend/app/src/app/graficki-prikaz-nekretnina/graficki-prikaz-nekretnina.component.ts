import { Component, OnInit } from '@angular/core';
import { Korisnik } from '../models/korisnik';
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
    this.nekretninaService.dohvatiSveNekretnine().subscribe((nekretnine: Nekretnina[]) => {
      if(nekretnine) {

        this.barChartLabels1 = ['ispod 100 000', 'izmedju 100 000 i 250 000', 'preko 250 000'];

        let brojNekretnina1 = 0;
        let brojNekretnina2 = 0;
        let brojNekretnina3 = 0;

        for(let nekretnina of nekretnine) {
          if(nekretnina.cena < 100000) {
            brojNekretnina1++;
          } else if(nekretnina.cena >= 100000 && nekretnina.cena < 250000) {
            brojNekretnina2++;
          } else {
            brojNekretnina3++;
          }
        }

        this.data1.push(brojNekretnina1);
        this.data1.push(brojNekretnina2);
        this.data1.push(brojNekretnina3);

        let data1 = {
          data: this.data1,
          label: "Broj nekretnina",
          backgroundColor: ['blue']
        }

        this.barChartData1.push(data1);


        let gradovi: string[] = [];
        let brojNekretninaPoGradovima: number[] = [];
        for(let nekretnina of nekretnine) {
          if(!gradovi.includes(nekretnina.grad)) {
            gradovi.push(nekretnina.grad);
            let brojNekretnina = 1;
            brojNekretninaPoGradovima.push(brojNekretnina);
          } else {
            let i = gradovi.indexOf(nekretnina.grad);
            brojNekretninaPoGradovima[i]++;
          }
        }

        for(let i = 0; i < brojNekretninaPoGradovima.length; i++) {
          this.data2.push(brojNekretninaPoGradovima[i]);
        }

        this.barChartLabels2 = gradovi;
        let data2 = {
          data: this.data2,
          label: "Broj nekretnina",
          backgroundColor: ['blue']
        }

        this.barChartData2.push(data2);



        this.barChartLabels3 = ['Broj kuca koje se prodaju', 'Broj kuca koje se izdaju', 'Broj stanova koji se prodaju', 'Broj stanova koji se izdaju'];
        
        let brojKucaKojeSeProdaju = 0;
        let brojKucaKojeSeIzdaju = 0;
        let brojStanovaKojiSeProdaju = 0;
        let brojStanovaKojiSeIzdaju = 0;

        for(let nekretnina of nekretnine) {
          if(nekretnina.tipNekretnine == 'kuca' && nekretnina.tipOglasa == 'Prodaja') {
            brojKucaKojeSeProdaju++;
          } else if(nekretnina.tipNekretnine == 'kuca' && nekretnina.tipOglasa == 'Izdavanje') {
            brojKucaKojeSeIzdaju++;
          } else if(nekretnina.tipNekretnine == 'stan' && nekretnina.tipOglasa == 'Prodaja') {
            brojStanovaKojiSeProdaju++;
          } else {
            brojStanovaKojiSeIzdaju++;
          }
        }

        this.data3.push(brojKucaKojeSeProdaju);
        this.data3.push(brojKucaKojeSeIzdaju);
        this.data3.push(brojStanovaKojiSeProdaju);
        this.data3.push(brojStanovaKojiSeIzdaju);

        let data3 = {
          data: this.data3,
          label: "Broj nekretnina",
          backgroundColor: ['blue']
        }

        this.barChartData3.push(data3);
      }
    })
  }

  data1: number[] = [];
  data2: number[] = [];
  data3: number[] = [];


}
