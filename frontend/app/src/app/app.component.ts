import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Korisnik } from './models/korisnik';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.korisnik = JSON.parse(localStorage.getItem('ulogovan'));
  }

  korisnik: Korisnik;

  ulogovan(): boolean {
    return this.korisnik != null;
  }

}
