import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  hide = true;

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Ingrese un correo valido';
    }

    return this.email.hasError('email') ? 'Este correo no es valido' : '';
  }



  constructor (public dialog: MatDialog, public route: Router) {}

  Login() : void {
   this.route.navigate(['./home'])
  }

  alert(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(AlertModalComponent, {
      width: '500px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

}

@Component({
  selector: 'alert',
  templateUrl: './alert.html',
  styleUrls: ['./login.component.scss']
})

export class AlertModalComponent {
  constructor(public dialogRef: MatDialogRef<AlertModalComponent>) {}

}
