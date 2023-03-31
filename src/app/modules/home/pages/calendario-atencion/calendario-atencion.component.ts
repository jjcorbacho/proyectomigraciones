import { Component } from '@angular/core';

@Component({
  selector: 'app-calendario-atencion',
  templateUrl: './calendario-atencion.component.html',
  styleUrls: ['./calendario-atencion.component.scss']
})
export class CalendarioAtencionComponent {
  selected!: Date | null;

}
