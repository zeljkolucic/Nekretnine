import { Nekretnina } from "./nekretnina";

export class Ponuda {
    idP: number;
    idN: number;
    nazivNekretnine: number;
    cena: number;
    vlasnik: string;
    ponudjac: string;
    tipOglasa: string;
    datumOd: string;
    datumDo: string;
    pregledana: boolean;
    prihvacena: boolean;
}