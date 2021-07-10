import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { KorisnikService } from '../korisnik.service';

@Component({
  selector: 'app-radnik-agencije',
  templateUrl: './radnik-agencije.component.html',
  styleUrls: ['./radnik-agencije.component.css']
})
export class RadnikAgencijeComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private korisnikService: KorisnikService) { }

  ngOnInit(): void {
  }

  prikaziNekretnine() {
    this.router.navigate(['pregledNekretnina'], {relativeTo: this.route});
  }

  prikaziDodavanjeNekretnine() {
    this.router.navigate(['dodavanjeNekretnine'], {relativeTo: this.route});
  }

  odjaviSe() {
    localStorage.removeItem('ulogovan');
    this.korisnikService.postaviLoginStatus(false);
    this.router.navigate(['']);
  }

}
