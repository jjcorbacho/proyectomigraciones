import { Component, EventEmitter, Input, Output} from '@angular/core';
import { JefaturasyDependencias } from '../../services/interfaces/data.interface';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-boton-agregar',
  templateUrl: './boton-agregar.component.html',
  styleUrls: ['./boton-agregar.component.scss']
})
export class BotonAgregarComponent {

  @Input() jefaturasyDependencias: JefaturasyDependencias = {
    jefaturaZonal: '',
    dependencia: '',
    cantidadDeLibretas: 0,
    porcentajedeLibretas: 0,
    activo: false, 
  }

  @Output() onNuevaJefatura: EventEmitter<JefaturasyDependencias> = new EventEmitter();

  constructor (private DataService: DataService) {
  }

  agregar ( ) {
    if ( this.jefaturasyDependencias.jefaturaZonal.trim().length === 0) {
      return; }
    console.log(this.jefaturasyDependencias);
    this.onNuevaJefatura.emit(this.jefaturasyDependencias)  

    this.DataService.agregar(this.jefaturasyDependencias)
  
  this.jefaturasyDependencias = {
    jefaturaZonal: '',
    dependencia: '',
    cantidadDeLibretas: 0,
    porcentajedeLibretas: 0,
    activo: false, 
    }
  }
}


