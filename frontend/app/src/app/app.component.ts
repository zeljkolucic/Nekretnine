import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { KorisnikService } from './korisnik.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(public korisnikService: KorisnikService) {}

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    localStorage.clear();
  }

}
