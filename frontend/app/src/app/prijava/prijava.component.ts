import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KorisnikService } from '../korisnik.service';
import { Korisnik } from '../models/korisnik';

@Component({
  selector: 'app-prijava',
  templateUrl: './prijava.component.html',
  styleUrls: ['./prijava.component.css']
})
export class PrijavaComponent implements OnInit {

  constructor(private korisnikService: KorisnikService, private router: Router) { }

  ngOnInit(): void {

  }

  korisnickoIme: string;
  lozinka: string;
  tip: string;
  greska: string;

  prijava() {
    this.korisnikService.prijava(this.korisnickoIme, this.lozinka, this.tip).subscribe((korisnik: Korisnik) => {
      if(korisnik) {
        localStorage.setItem('ulogovan', JSON.stringify(korisnik));
        if(korisnik.tip == 'registrovani korisnik') {
          this.router.navigate(['registrovaniKorisnik']);
        } else if(korisnik.tip == 'radnik agencije') {
          this.router.navigate(['radnikAgencije']);
        } else if(korisnik.tip == 'administrator') {
          this.router.navigate(['administrator']);
        }
      } else {
        this.greska = 'Pogresni pristupni podaci!';
        let toast = document.getElementById('snackbar');
        toast.className = 'showRed';
        setTimeout(function(){toast.className = toast.className.replace('showRed', ''); }, 3000);
      }
    })
  }

}
