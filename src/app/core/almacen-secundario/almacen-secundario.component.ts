import { Component } from '@angular/core';
import { JefaturasyDependencias } from 'src/app/shared/services/interfaces/data.interface';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-almacen-secundario',
  templateUrl: './almacen-secundario.component.html',
  styleUrls: ['./almacen-secundario.component.scss']
})
export class AlmacenSecundarioComponent {
  displayedColumns: string[] = ['jefaturaZonal', 'dependencia', 'cantidadDeLibretas', 'porcentajedeLibretas', 'activo'];
  dataSource = this.oficinas;

  get oficinas(): JefaturasyDependencias[] {
    return this.DataService.oficinas
  }

  constructor (private DataService: DataService) {
  }

}