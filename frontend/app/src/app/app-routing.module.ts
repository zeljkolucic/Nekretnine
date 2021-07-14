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
import { ProcenatAgencijeComponent } from './procenat-agencije/procenat-agencije.component';
import { UgovoreneProdajeComponent } from './ugovorene-prodaje/ugovorene-prodaje.component';
import { AdminGuard } from './admin.guard';
import { RadnikAgencijeGuard } from './radnik-agencije.guard';
import { RegistrovaniKorisnikGuard } from './registrovani-korisnik.guard';
import { NeulogovanKorisnikGuard } from './neulogovan-korisnik.guard';

const routes: Routes = [
  {path: '', component: PregledNekretninaComponent},
  {path: 'prijava', component: PrijavaComponent, canActivate: [NeulogovanKorisnikGuard]},
  {path: 'registracija', component: RegistracijaComponent, canActivate: [NeulogovanKorisnikGuard]},
  {path: 'pregledNekretnina', component: PregledNekretninaComponent, canActivate: [NeulogovanKorisnikGuard]},
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
    ],
    canActivate: [RegistrovaniKorisnikGuard]
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
      {path: 'pregledPonuda', component: PregledPonudaComponent},
      {path: 'ugovoreneProdaje', component: UgovoreneProdajeComponent}
    ],
    canActivate: [RadnikAgencijeGuard]
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
      {path: 'pregledPonuda', component: PregledPonudaComponent},
      {path: 'procenatAgencije', component: ProcenatAgencijeComponent},
      {path: 'ugovoreneProdaje', component: UgovoreneProdajeComponent}
    ],
    canActivate: [AdminGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
