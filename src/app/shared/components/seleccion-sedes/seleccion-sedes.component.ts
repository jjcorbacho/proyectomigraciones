import { Component } from '@angular/core';
import { JefaturasyDependencias } from '../../services/interfaces/data.interface';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-seleccion-sedes',
  templateUrl: './seleccion-sedes.component.html',
  styleUrls: ['./seleccion-sedes.component.scss']
})
export class SeleccionSedesComponent {
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

  agregar() {
    this.DataService.agregar(this.jefaturasyDependencias)
  }

}
