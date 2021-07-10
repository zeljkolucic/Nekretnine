import { Component, OnInit, OnDestroy } from '@angular/core';
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

  ngOnDestroy(): void {
    localStorage.removeItem('ulogovan');
    this.korisnikService.postaviLoginStatus(false);
  }

  poruka: string;

  odjaviSe() {
    localStorage.removeItem('ulogovan');
    this.korisnikService.postaviLoginStatus(false);
    this.router.navigate(['']);
  }  

}
