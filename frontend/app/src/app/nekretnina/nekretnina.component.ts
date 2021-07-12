import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogPorukaComponent } from '../dialog-poruka/dialog-poruka.component';
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

  dohvatiNekretninuPoId(idN) {
    this.nekretninaService.dohvatiNekretninuPoId(idN).subscribe((nekretnina: Nekretnina) => {
      this.nekretnina = nekretnina;
    })
  }

  ponudi() {
    if(!this.ponuda)
      this.prikaziSnackBar('Unesite ponudu!');
    else {
      let korisnik: Korisnik = JSON.parse(localStorage.getItem('ulogovan'));
      this.ponudaService.dodajPonudu(this.ponuda, this.nekretnina.vlasnik, korisnik.korisnickoIme).subscribe();
      this.prikaziSnackBar('Ponuda uspesno dodata!');
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

  otvoriDialog(): void {
    let korisnik = JSON.parse(localStorage.getItem('ulogovan'));
    const dialogRef = this.dialog.open(DialogPorukaComponent, {
      width: '500px',
      data: {nekretnina: this.nekretnina, korisnik: korisnik}
    });

    dialogRef.afterClosed().subscribe();
  }

  prikaziSnackBar(poruka) {
    this.snackBar.open(poruka, '', {duration: 3000});
  }

}
