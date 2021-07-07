import { Component, OnInit } from '@angular/core';
import { KorisnikService } from '../korisnik.service';
import { Korisnik } from '../models/korisnik';
import { ZahtevService } from '../zahtev.service';

@Component({
  selector: 'app-registracija',
  templateUrl: './registracija.component.html',
  styleUrls: ['./registracija.component.css']
})
export class RegistracijaComponent implements OnInit {

  constructor(private korisnikService: KorisnikService, private zahtevService: ZahtevService) { }

  ngOnInit(): void {

  }

  ime: string;
  prezime: string;
  korisnickoIme: string;
  lozinka: string;
  potvrdaLozinke: string;
  slika: string;
  adresa: string;
  gradDrzava: string;

  poruka: string;

  registracija() {
    if(!this.ime || !this.prezime || !this.korisnickoIme || !this.lozinka || !this.potvrdaLozinke || !this.adresa || !this.gradDrzava) {
      this.poruka = 'Unesite sve podatke!';
      let toast = document.getElementById('snackbar');
      toast.className = 'showRed';
      setTimeout(function(){toast.className = toast.className.replace('showRed', ''); }, 3000);
    } else {
      this.korisnikService.dohvatiKorisnika(this.korisnickoIme).subscribe((korisnik: Korisnik) => {
        if(korisnik) {
          this.poruka = 'Korisnicko ime je zauzeto!';
          let toast = document.getElementById('snackbar');
          toast.className = 'showRed';
          setTimeout(function(){toast.className = toast.className.replace('showRed', ''); }, 3000);
        } else {
          let regexLozinka = /^(?!.*([A-Za-z0-9!@#$%^&*()_+{}[\]|\\\/?.,><:"';])\1{3})(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}[\]|\\\/?.,><:"';])[A-Za-z\d!@#$%^&*()_+{}[\]|\\\/?.,><:"';]{8,24}$/;
          let regexEmail = /^\w{4,}@\w+\.\w{2,3}$/;
          if(!regexLozinka.test(this.lozinka)) {
            this.poruka = 'Lozinka nije dovoljno jaka!';
            let toast = document.getElementById('snackbar');
            toast.className = 'showRed';
            setTimeout(function(){toast.className = toast.className.replace('showRed', ''); }, 3000);
          } else if(this.lozinka != this.potvrdaLozinke) {
            this.poruka = 'Lozinke se ne podudaraju!';
            let toast = document.getElementById('snackbar');
            toast.className = 'showRed';
            setTimeout(function(){toast.className = toast.className.replace('showRed', ''); }, 3000);
          } else if(!regexEmail.test(this.adresa)) {
            this.poruka = 'Email nije u odgovarajucem formatu!';
            let toast = document.getElementById('snackbar');
            toast.className = 'showRed';
            setTimeout(function(){toast.className = toast.className.replace('showRed', ''); }, 3000);
          } else {
            if(!this.slika) 
              this.slika = 'podrazumevano.png'; 
            this.poruka = 'Zahtev za registracijom uspesno poslat!'; 
            let toast = document.getElementById('snackbar');
            toast.className = 'showRed';
            setTimeout(function(){toast.className = toast.className.replace('showGreen', ''); }, 3000);
            this.zahtevService.dodajZahtev(this.ime, this.prezime, this.korisnickoIme, this.lozinka, this.slika, this.adresa, this.gradDrzava).subscribe((err) => {
              if(err) console.log(err);
            })
          }
        }
      })
    }
  }

  dodajSlike() {
    
  }



}
