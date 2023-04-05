import { AfterViewInit, Component, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-almacen-secundario',
  templateUrl: './almacen-secundario.component.html',
  styleUrls: ['./almacen-secundario.component.scss']
})
export class AlmacenSecundarioComponent implements AfterViewInit {

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