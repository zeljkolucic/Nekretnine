import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdministratorComponent } from './administrator/administrator.component';
import { AzuriranjeKorisnikaComponent } from './azuriranje-korisnika/azuriranje-korisnika.component';
import { DodavanjeNekretnineComponent } from './dodavanje-nekretnine/dodavanje-nekretnine.component';
import { DodavanjeNovogKorisnikaComponent } from './dodavanje-novog-korisnika/dodavanje-novog-korisnika.component';
import { PrijavaComponent } from './prijava/prijava.component';
import { PromenaLozinkeComponent } from './promena-lozinke/promena-lozinke.component';
import { RadnikAgencijeComponent } from './radnik-agencije/radnik-agencije.component';
import { RegistracijaComponent } from './registracija/registracija.component';
import { RegistrovaniKorisnikComponent } from './registrovani-korisnik/registrovani-korisnik.component';
import { PregledZahtevaZaRegistracijuComponent } from './pregled-zahteva-za-registraciju/pregled-zahteva-za-registraciju.component';
import { PregledKorisnikaSistemaComponent } from './pregled-korisnika-sistema/pregled-korisnika-sistema.component';
import { PregledNekretninaComponent } from './pregled-nekretnina/pregled-nekretnina.component';

const routes: Routes = [
  {path: '', component: PrijavaComponent},
  {path: 'prijava', component: PrijavaComponent},
  {path: 'registracija', component: RegistracijaComponent},
  {path: 'registrovaniKorisnik', component: RegistrovaniKorisnikComponent},
  {path: 'radnikAgencije', component: RadnikAgencijeComponent},
  {
    path: 'administrator', 
    component: AdministratorComponent,
    children: [
      {path: 'pregledZahtevaZaRegistraciju', component: PregledZahtevaZaRegistracijuComponent},
      {path: 'pregledKorisnikaSistema', component: PregledKorisnikaSistemaComponent},
      {path: 'pregledNekretnina', component: PregledNekretninaComponent},
      {path: 'dodavanjeNovogKorisnika', component: DodavanjeNovogKorisnikaComponent},
      {path: 'dodavanjeNekretnine', component: DodavanjeNekretnineComponent}
    ]
  },
  {path: 'azuriranjeKorisnika', component: AzuriranjeKorisnikaComponent},   
  {path: 'promenaLozinke', component: PromenaLozinkeComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
