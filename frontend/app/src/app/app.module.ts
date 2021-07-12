import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrijavaComponent } from './prijava/prijava.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdministratorComponent } from './administrator/administrator.component';
import { RegistrovaniKorisnikComponent } from './registrovani-korisnik/registrovani-korisnik.component';
import { RadnikAgencijeComponent } from './radnik-agencije/radnik-agencije.component';
import { RegistracijaComponent } from './registracija/registracija.component';
import { AzuriranjeKorisnikaComponent } from './azuriranje-korisnika/azuriranje-korisnika.component';
import { PromenaLozinkeComponent } from './promena-lozinke/promena-lozinke.component';
import { DodavanjeNovogKorisnikaComponent } from './dodavanje-novog-korisnika/dodavanje-novog-korisnika.component';
import { NekretninaComponent } from './nekretnina/nekretnina.component';
import { DodavanjeNekretnineComponent } from './dodavanje-nekretnine/dodavanje-nekretnine.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { PregledZahtevaZaRegistracijuComponent } from './pregled-zahteva-za-registraciju/pregled-zahteva-za-registraciju.component';
import { PregledKorisnikaSistemaComponent } from './pregled-korisnika-sistema/pregled-korisnika-sistema.component';
import { PregledNekretninaComponent } from './pregled-nekretnina/pregled-nekretnina.component';
import { GrafickiPrikazNekretninaComponent } from './graficki-prikaz-nekretnina/graficki-prikaz-nekretnina.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DialogPorukaComponent } from './dialog-poruka/dialog-poruka.component';
import { PregledPorukaComponent } from './pregled-poruka/pregled-poruka.component';
import { ChartsModule } from 'ng2-charts';
import { AzuriranjeNekretnineComponent } from './azuriranje-nekretnine/azuriranje-nekretnine.component';

@NgModule({
  declarations: [
    AppComponent,
    PrijavaComponent,
    AdministratorComponent,
    RegistrovaniKorisnikComponent,
    RadnikAgencijeComponent,
    RegistracijaComponent,
    AzuriranjeKorisnikaComponent,
    PromenaLozinkeComponent,
    DodavanjeNovogKorisnikaComponent,
    NekretninaComponent,
    DodavanjeNekretnineComponent,
    PregledZahtevaZaRegistracijuComponent,
    PregledKorisnikaSistemaComponent,
    PregledNekretninaComponent,
    GrafickiPrikazNekretninaComponent,
    DialogPorukaComponent,
    PregledPorukaComponent,
    AzuriranjeNekretnineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgbModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
