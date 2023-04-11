import { Component } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { JefaturasyDependencias } from 'src/app/shared/services/interfaces/data.interface';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-sedes',
  templateUrl: './sedes.component.html',
  styleUrls: ['./sedes.component.scss']
})

export class SedesComponent {

  displayedColumns: string[] = ['jefaturaZonal', 'dependencia', 'activo'];
  dataSource = this.oficinas

  get oficinas(): JefaturasyDependencias[] {
    return this.DataService.oficinas
  }

  constructor (private DataService: DataService) {
  }

  agregarNuevaJefatura( argumento : JefaturasyDependencias) {
    this.oficinas.push( argumento );
    console.log('ver');
    
  }

}






