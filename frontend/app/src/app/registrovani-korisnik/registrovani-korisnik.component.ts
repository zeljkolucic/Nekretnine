import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KorisnikService } from '../korisnik.service';

@Component({
  selector: 'app-registrovani-korisnik',
  templateUrl: './registrovani-korisnik.component.html',
  styleUrls: ['./registrovani-korisnik.component.css']
})
export class RegistrovaniKorisnikComponent implements OnInit {

  constructor(private router : Router, private korisnikService: KorisnikService) { }

  ngOnInit(): void {
  }

  odjaviSe() {
    localStorage.removeItem('ulogovan');
    this.korisnikService.postaviLoginStatus(false);
    this.router.navigate(['']);
  }

}
