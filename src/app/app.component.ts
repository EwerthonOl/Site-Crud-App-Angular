import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormAddEditComponentComponent } from './form-add-edit-component/form-add-edit-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'crud-app';

  constructor(private _dialog: MatDialog){}

  openAddEditEmpForm(){
    this._dialog.open(FormAddEditComponentComponent)
  }
}
