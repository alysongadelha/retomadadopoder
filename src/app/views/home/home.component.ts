import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CharactersVampireFormComponent } from './characters-vampire-form/characters-vampire-form.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  pageName = 'Retomada de Poder';

  ngOnInit(): void {}

  addChar() {
    const dialogRef = this.dialog.open(CharactersVampireFormComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
