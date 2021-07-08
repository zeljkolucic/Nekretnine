import { Component, OnInit } from '@angular/core';
import { Nekretnina } from '../models/nekretnina';

@Component({
  selector: 'app-nekretnina',
  templateUrl: './nekretnina.component.html',
  styleUrls: ['./nekretnina.component.css']
})
export class NekretninaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { 
    this.nekretnina = JSON.parse(localStorage.getItem('nekretnina'));
  }

  nekretnina: Nekretnina;

}
