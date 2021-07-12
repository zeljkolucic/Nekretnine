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
import { GrafickiPrikazNekretninaComponent } from './graficki-prikaz-nekretnina/graficki-prikaz-nekretnina.component';
import { NekretninaComponent } from './nekretnina/nekretnina.component';
import { AzuriranjeNekretnineComponent } from './azuriranje-nekretnine/azuriranje-nekretnine.component';
import { PregledPonudaComponent } from './pregled-ponuda/pregled-ponuda.component';

const routes: Routes = [
  {path: '', component: PregledNekretninaComponent},
  {path: 'prijava', component: PrijavaComponent},
  {path: 'registracija', component: RegistracijaComponent},
  {path: 'pregledNekretnina', component: PregledNekretninaComponent},
  {
    path: 'registrovaniKorisnik', 
    component: RegistrovaniKorisnikComponent,
    children: [
      {path: 'promenaLozinke', component: PromenaLozinkeComponent},
      {path: 'dodavanjeNekretnine', component: DodavanjeNekretnineComponent},
      {path: 'pregledMojihNekretnina', component: PregledNekretninaComponent},
      {
        path: 'pregledNekretnina', 
        component: PregledNekretninaComponent,
        children: [
          {path: 'nekretnina/:idN', component: NekretninaComponent}
        ]
      },
      {path: 'azuriranjeNekretnine', component: AzuriranjeNekretnineComponent},
      {path: 'pregledPonuda', component: PregledPonudaComponent}
    ]
  },
  {
    path: 'radnikAgencije', 
    component: RadnikAgencijeComponent,
    children: [
      {path: '', component: GrafickiPrikazNekretninaComponent},
      {path: 'pregledNekretnina', component: PregledNekretninaComponent},
      {path: 'grafickiPrikazNekretnina', component: GrafickiPrikazNekretninaComponent},
      {path: 'dodavanjeNekretnine', component: DodavanjeNekretnineComponent},
      {path: 'promenaLozinke', component: PromenaLozinkeComponent},
      {path: 'azuriranjeNekretnine', component: AzuriranjeNekretnineComponent},
      {path: 'pregledPonuda', component: PregledPonudaComponent}
    ]
  },
  {
    path: 'administrator', 
    component: AdministratorComponent,
    children: [
      {path: '', component: PregledNekretninaComponent},
      {path: 'pregledZahtevaZaRegistraciju', component: PregledZahtevaZaRegistracijuComponent},
      {path: 'pregledKorisnikaSistema', component: PregledKorisnikaSistemaComponent},
      {path: 'pregledNekretnina', component: PregledNekretninaComponent},
      {path: 'grafickiPrikazNekretnina', component: GrafickiPrikazNekretninaComponent},
      {path: 'dodavanjeNovogKorisnika', component: DodavanjeNovogKorisnikaComponent},
      {path: 'dodavanjeNekretnine', component: DodavanjeNekretnineComponent},
      {path: 'promenaLozinke', component: PromenaLozinkeComponent},
      {path: 'azuriranjeKorisnika', component: AzuriranjeKorisnikaComponent},
      {path: 'azuriranjeNekretnine', component: AzuriranjeNekretnineComponent},
      {path: 'pregledPonuda', component: PregledPonudaComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
