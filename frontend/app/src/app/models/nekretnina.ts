import { Korisnik } from "./korisnik";

export class Nekretnina {
    idN: number;
    naziv: string;
    grad: string;
    opstina: string;
    adresa: string;
    tipNekretnine: string;
    brojSpratova: number;
    sprat: number;
    povrsina: number;
    brojSoba: string;
    namestena: boolean;
    galerija: string[];
    tipOglasa: string;
    cena: number;
    vlasnik: string;
    promovisana: boolean;
    odobrena: boolean;
}