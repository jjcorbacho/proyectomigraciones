import { Component } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-almacen-central',
  templateUrl: './almacen-central.component.html',
  styleUrls: ['./almacen-central.component.scss']
})
export class AlmacenCentralComponent {
  selected = '';
  showFiller = false;


  constructor(public dialog: MatDialog) {}

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogoEliminar, {
      width: '500px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  openDialog2(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogoAnadir, {
      width: '500px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  openDialog3(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(Dialogodistribuir, {
      width: '500px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

}

@Component({
  selector: 'dialogo-distribuir',
  templateUrl: 'dialogo-distribuir.html',
})
export class Dialogodistribuir {
  constructor(public dialogRef: MatDialogRef<Dialogodistribuir>) {}

}


@Component({
  selector: 'dialogo-eliminar',
  templateUrl: 'dialogo-eliminar.html',
})
export class DialogoEliminar {
  constructor(public dialogRef: MatDialogRef<DialogoEliminar>) {}

  sedesyDependencias = {
    jefaturaZonal: {
      departamento: 'Lima',
      dependencias: ['Breña', 'La Molina', 'Jockey Plaza'],
    },
    jefaturaZonal1: {
      departamento: 'Arequipa',
      dependencias: ['MAC 1', 'Toro Bravo'],
    },
    jefaturaZonal2: {
      departamento: 'Cusco',
      dependencias: ['Aeropuerto', 'Municipalidad'],
    }
  }

  data = Object.values(this.sedesyDependencias)


}


@Component({
  selector: 'dialogo-anadir',
  templateUrl: 'dialogo-anadir.html',
})
export class DialogoAnadir {
  constructor(public dialogRef: MatDialogRef<DialogoAnadir>) {}

  sedesyDependencias = {
    jefaturaZonal: {
      departamento: 'Lima',
      dependencias: ['Breña', 'La Molina', 'Jockey Plaza'],
    },
    jefaturaZonal1: {
      departamento: 'Arequipa',
      dependencias: ['MAC 1', 'Toro Bravo'],
    },
    jefaturaZonal2: {
      departamento: 'Cusco',
      dependencias: ['Aeropuerto', 'Municipalidad'],
    }
  }

  data = Object.values(this.sedesyDependencias)

}
