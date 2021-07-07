import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrovani-korisnik',
  templateUrl: './registrovani-korisnik.component.html',
  styleUrls: ['./registrovani-korisnik.component.css']
})
export class RegistrovaniKorisnikComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  odjaviSe() {
    localStorage.removeItem('ulogovan');
    this.router.navigate(['prijava']);
  }

}
