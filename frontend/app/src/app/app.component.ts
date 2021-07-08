import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { KorisnikService } from './korisnik.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private korisnikService: KorisnikService) {}

  ngOnInit(): void {
    this.loginStatus$ = this.korisnikService.jeUlogovan;
    this.korisnickoIme$ = this.korisnikService.trenutnoKorisnickoIme;
    this.tipKorisnika$ = this.korisnikService.trenutniTipKorisnika;
  }

  loginStatus$ : Observable<boolean>;
  korisnickoIme$ : Observable<string>;
  tipKorisnika$: Observable<string>;

}
