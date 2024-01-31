import { Injectable } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  constructor(private _snackBar: MatSnackBar) { }

  // FUNÇÃO PARA NOTIFICAÇÕES NO SITE
  openSnackBar(message: string, action: string = "Ok") {
    this._snackBar.open(message, action, {
      duration: 10000,
      verticalPosition: "top",
    });
  }
}
