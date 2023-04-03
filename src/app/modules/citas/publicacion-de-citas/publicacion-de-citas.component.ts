import { SelectionModel } from '@angular/cdk/collections';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table'

@Component({
  selector: 'app-publicacion-de-citas',
  templateUrl: './publicacion-de-citas.component.html',
  styleUrls: ['./publicacion-de-citas.component.scss']
})
export class PublicacionDeCitasComponent implements AfterViewInit {
  selected = '';
  showFiller = false;

  displayedColumns: string[] = ['dependencia', 'fechadeRegistro', 'fechaIncio', 'cantidad', 'select'];
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
  dependencia: string;
  fechadeRegistro: string;
  fechaIncio: string;
  fechaFin: string;
  cantidad: number;
  select: boolean;

}

const ELEMENT_DATA: PeriodicElement[] = [
  { dependencia: 'Breña', fechadeRegistro: '01/02/2023 08:15', fechaIncio: '03/04/2023', fechaFin:'03/04/2023', cantidad: 1800, select: true},
  { dependencia: 'MAC 1', fechadeRegistro: '01/02/2023 08:20', fechaIncio: '03/04/2023', fechaFin:'03/04/2023', cantidad: 1800, select: true},
  { dependencia: 'MAC 2', fechadeRegistro: '01/02/2023 13:10', fechaIncio: '03/04/2023', fechaFin:'03/04/2023', cantidad: 1800, select: true},
  { dependencia: 'La Molina', fechadeRegistro: '01/02/2023 14:00', fechaIncio: '03/04/2023', fechaFin: '03/04/2023' , cantidad: 1800, select: true}, 
  { dependencia: 'Jockey Plaza', fechadeRegistro: '01/02/2023 14:15', fechaIncio: '03/04/2023', fechaFin:'03/04/2023' ,cantidad: 1800, select: true},

];