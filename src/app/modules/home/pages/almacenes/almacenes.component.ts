import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-almacenes',
  templateUrl: './almacenes.component.html',
  styleUrls: ['./almacenes.component.scss']
})
export class AlmacenesComponent implements AfterViewInit {
  selected = '';
  showFiller = false;

  displayedColumns: string[] = ['jefaturaZonal', 'cantidadDeLibretas', 'notificar', 'select'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


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


export interface PeriodicElement {
  
  jefaturaZonal: string;
  cantidadDeLibretas: string;
  notificar: string

}

const ELEMENT_DATA: PeriodicElement[] = [
  { jefaturaZonal: 'Lima', cantidadDeLibretas: '5800', notificar: '80%'},
  { jefaturaZonal: 'Trujillo', cantidadDeLibretas: '1400', notificar: '90%'},
  { jefaturaZonal: 'Arequipa', cantidadDeLibretas: '1200', notificar: '90%'},
  { jefaturaZonal: 'Tumbes', cantidadDeLibretas: '1200', notificar: '90%'},
  { jefaturaZonal: 'Huancayo', cantidadDeLibretas: '2500', notificar: '70%'},

];