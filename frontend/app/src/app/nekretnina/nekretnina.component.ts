import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Korisnik } from '../models/korisnik';
import { Nekretnina } from '../models/nekretnina';
import { NekretninaService } from '../nekretnina.service';
import { PonudaService } from '../ponuda.service';

export interface DialogData {
  nekretnina: Nekretnina;
  korisnik: Korisnik;
}

@Component({
  selector: 'app-nekretnina',
  templateUrl: './nekretnina.component.html',
  styleUrls: ['./nekretnina.component.css']
})
export class NekretninaComponent implements OnInit {

  constructor(private nekretninaService: NekretninaService, private route: ActivatedRoute, private snackBar: MatSnackBar,
     private ponudaService: PonudaService, private dialog: MatDialog, private router: Router) { }

  ngOnInit(): void { 
    let idN = this.route.snapshot.paramMap.get('idN');
    this.dohvatiNekretninuPoId(idN);
  }

  nekretnina: Nekretnina;
  ponuda: number;
  nacinPlacanja: string;
  datumi = new FormGroup({
    pocetak: new FormControl(),
    kraj: new FormControl()
  });

  dohvatiNekretninuPoId(idN) {
    this.nekretninaService.dohvatiNekretninuPoId(idN).subscribe((nekretnina: Nekretnina) => {
      this.nekretnina = nekretnina;
    })
  }

  ponudi() {
    if(!this.ponuda || (this.nekretnina.tipOglasa == 'Izdavanje' && !this.datumi.value['pocetak'] && !this.datumi.value['kraj']))
      this.prikaziSnackBar('Unesite ponudu!');
    else {
      let korisnik: Korisnik = JSON.parse(localStorage.getItem('ulogovan'));
      if(this.nekretnina.tipOglasa == 'Prodaja') {
        this.ponudaService.proveriDaLiJeProdata(this.nekretnina.idN).subscribe(res => {
          if(res['poruka'] == 'prodata') {
            this.prikaziSnackBar('Nekretnina je prodata!');
          } else if(res['poruka'] == 'dostupna') {
            this.ponudaService.dodajPonudu(this.nekretnina.idN, this.nekretnina.naziv, this.ponuda, 
            this.nekretnina.vlasnik, korisnik.korisnickoIme, this.nekretnina.tipOglasa).subscribe();
            this.prikaziSnackBar('Ponuda uspesno dodata!');
          }
        })
      } else if(this.nekretnina.tipOglasa == 'Izdavanje') {
        let datumOd = this.datumi.value['pocetak'].toISOString().substring(0, 10);
        let datumDo = this.datumi.value['kraj'].toISOString().substring(0, 10);
        console.log(datumDo);
        this.ponudaService.proveriDostupnost(this.nekretnina.idN, datumOd, datumDo).subscribe((res) => {
          if(res['poruka'] == 'nedostupna') {
            this.prikaziSnackBar('Nekretnina je zauzeta u tom periodu!');
          } else {
            this.ponudaService.dodajPonuduZaIznajmljivanje(this.nekretnina.idN, this.nekretnina.naziv, this.ponuda, 
              this.nekretnina.vlasnik, korisnik.korisnickoIme, this.nekretnina.tipOglasa, datumOd, datumDo).subscribe();
              this.prikaziSnackBar('Ponuda uspesno dodata!');
          }
        });
      }   
    }
  }

  mojaNekretnina(): boolean {
    let korisnik: Korisnik = JSON.parse(localStorage.getItem('ulogovan'));
    return this.nekretnina.vlasnik == korisnik.korisnickoIme;
  }

  azuriraj() {
    localStorage.setItem('nekretninaZaAzuriranje', JSON.stringify(this.nekretnina));
    let korisnik = JSON.parse(localStorage.getItem('ulogovan'));
    if(korisnik.tip == 'registrovani korisnik') {
      this.router.navigate(['registrovaniKorisnik/azuriranjeNekretnine']);
    } else if(korisnik.tip == 'radnik agencije') {
      this.router.navigate(['radnikAgencije/azuriranjeNekretnine']);
    } else if (korisnik.tip == 'administrator') {
      this.router.navigate(['administrator/azuriranjeNekretnine']);
    } 
  }

  prikaziSnackBar(poruka) {
    this.snackBar.open(poruka, '', {duration: 3000});
  }

}
