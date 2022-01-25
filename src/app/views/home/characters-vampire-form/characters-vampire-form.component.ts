import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-characters-vampire-form',
  templateUrl: './characters-vampire-form.component.html',
  styleUrls: ['./characters-vampire-form.component.css'],
})
export class CharactersVampireFormComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<CharactersVampireFormComponent>) {}

  ngOnInit(): void {}

  cancel(): void {
    this.dialogRef.close();
  }
}
