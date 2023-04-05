import { Component, Input } from '@angular/core';
import { DataService } from '../../services/data.service';
import { JefaturasyDependencias } from '../../services/interfaces/data.interface';

@Component({
  selector: 'app-seleccion-dependencias',
  templateUrl: './seleccion-dependencias.component.html',
  styleUrls: ['./seleccion-dependencias.component.scss']
})
export class SeleccionDependenciasComponent {

  jefaturasyDependencias: JefaturasyDependencias = {
    jefaturaZonal: '',
    dependencia: '',
    cantidadDeLibretas: 0,
    porcentajedeLibretas: 0,
    activo: false, 
  }

  get oficinas(): JefaturasyDependencias[] {
    return this.DataService.oficinas
  }

  constructor (private DataService: DataService) {
  }

}
