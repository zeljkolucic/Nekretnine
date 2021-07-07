import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { KorisnikService } from '../korisnik.service';
import { NekretninaService } from '../nekretnina.service';

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.css']
})
export class AdministratorComponent implements OnInit {

  constructor(private route: ActivatedRoute, private korisnikService: KorisnikService, private router: Router, private nekretninaService: NekretninaService) { }

  ngOnInit(): void {
  }

  poruka: string;

  prikaziZahteveZaRegistraciju() {
    this.router.navigate(['pregledZahtevaZaRegistraciju'], {relativeTo: this.route});
  }

  prikaziKorisnikeSistema() {
    this.router.navigate(['pregledKorisnikaSistema'], {relativeTo: this.route});
  }

  prikaziNekretnine() {
    this.router.navigate(['pregledNekretnina'], {relativeTo: this.route});
  }

  prikaziDodavanjeNovogKorisnika() {
    this.router.navigate(['dodavanjeNovogKorisnika'], {relativeTo: this.route});
  }

  prikaziDodavanjeNekretnine() {
    this.router.navigate(['dodavanjeNekretnine'], {relativeTo: this.route});
  }

  odjaviSe() {
    localStorage.removeItem('ulogovan');
    this.router.navigate(['prijava']);
  }
}
