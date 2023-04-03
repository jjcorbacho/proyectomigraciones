import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {FormGroup, FormControl} from '@angular/forms';


@Component({
  selector: 'app-registro-programacion-citas',
  templateUrl: './registro-programacion-citas.component.html',
  styleUrls: ['./registro-programacion-citas.component.scss']
})
export class RegistroProgramacionCitasComponent implements AfterViewInit {

  range = new FormGroup({
    start: new FormControl<Date| null>(null),
    end: new FormControl<Date | null>(null),
  });

  displayedColumns: string[] = ['fecha', 'citasProgramadas', 'citasPublicadas', 'citasTomadas','citasDistribuidas'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  fecha: string;
  citasProgramadas: number;
  citasPublicadas: number;
  citasTomadas: number;
  citasDistribuidas:number
}

const ELEMENT_DATA: PeriodicElement[] = [
  {fecha: '03/04', citasProgramadas: 10, citasPublicadas: 10, citasTomadas: 10, citasDistribuidas: 10},
  {fecha: '04/04', citasProgramadas: 10, citasPublicadas: 10, citasTomadas: 10, citasDistribuidas: 10},
  {fecha: '05/04', citasProgramadas: 10, citasPublicadas: 10, citasTomadas: 10, citasDistribuidas: 10},
  {fecha: '06/04', citasProgramadas: 10, citasPublicadas: 10, citasTomadas: 10, citasDistribuidas: 10},
  {fecha: '07/04', citasProgramadas: 10, citasPublicadas: 10, citasTomadas: 10, citasDistribuidas: 10},
  {fecha: '08/04', citasProgramadas: 10, citasPublicadas: 10, citasTomadas: 10, citasDistribuidas: 10},
  {fecha: '09/04', citasProgramadas: 10, citasPublicadas: 10, citasTomadas: 10, citasDistribuidas: 10},
  {fecha: '10/04', citasProgramadas: 10, citasPublicadas: 10, citasTomadas: 10, citasDistribuidas: 10},
  {fecha: '11/04', citasProgramadas: 10, citasPublicadas: 10, citasTomadas: 10, citasDistribuidas: 10}

];




