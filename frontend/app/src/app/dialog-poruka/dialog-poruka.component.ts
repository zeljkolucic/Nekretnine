import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Nekretnina } from '../models/nekretnina';
import { PorukaService } from '../poruka.service';
import { DialogData } from '../nekretnina/nekretnina.component';

@Component({
  selector: 'app-dialog-poruka',
  templateUrl: './dialog-poruka.component.html',
  styleUrls: ['./dialog-poruka.component.css']
})
export class DialogPorukaComponent implements OnInit {

  ngOnInit(): void {

  }

  constructor(
    public dialogRef: MatDialogRef<DialogPorukaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private porukaService: PorukaService) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  tekstPoruke: string;

  posaljiPoruku() {

  }


}
