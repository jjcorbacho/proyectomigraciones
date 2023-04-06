import { Component, Input } from '@angular/core';
import { DataService } from '../../services/data.service';
import { JefaturasyDependencias } from '../../services/interfaces/data.interface';


@Component({
  selector: 'app-seleccion-jefaturas',
  templateUrl: './seleccion-jefaturas.component.html',
  styleUrls: ['./seleccion-jefaturas.component.scss']
})


export class SeleccionJefaturasComponent {

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