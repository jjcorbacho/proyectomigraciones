import { SelectionModel } from '@angular/cdk/collections';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table'


@Component({
  selector: 'app-sedes',
  templateUrl: './sedes.component.html',
  styleUrls: ['./sedes.component.scss']
})
export class SedesComponent implements AfterViewInit {
  selected = '';
  showFiller = false;

  displayedColumns: string[] = ['dependencia', 'jefaturaZonal', 'select'];
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
  jefaturaZonal: string;

}

const ELEMENT_DATA: PeriodicElement[] = [
  { dependencia: 'Breña', jefaturaZonal: 'Lima'},
  { dependencia: 'MAC 1', jefaturaZonal: 'Lima'},
  { dependencia: 'MAC 2', jefaturaZonal: 'Lima'},
  { dependencia: 'Jockey Plaza', jefaturaZonal: 'Lima'},
  { dependencia: 'La Molina', jefaturaZonal: 'Lima'},

];
