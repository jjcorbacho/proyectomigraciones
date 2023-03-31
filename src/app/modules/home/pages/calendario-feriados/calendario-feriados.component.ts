import {Component} from '@angular/core';

@Component({
  selector: 'app-calendario-feriados',
  templateUrl: './calendario-feriados.component.html',
  styleUrls: ['./calendario-feriados.component.scss']
})
export class CalendarioFeriadosComponent {
  selected!: Date | null;

  }
