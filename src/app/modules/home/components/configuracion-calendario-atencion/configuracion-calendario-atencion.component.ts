import { Component } from '@angular/core';


@Component({
  selector: 'app-configuracion-calendario-atencion',
  templateUrl: './configuracion-calendario-atencion.component.html',
  styleUrls: ['./configuracion-calendario-atencion.component.scss']
})
export class ConfiguracionCalendarioAtencionComponent {
//   @ViewChild('calendar') calendar;
//   calendarOptions: any;

//   ngAfterViewInit() {
//     this.calendarOptions = {
//       header: {
//         left: 'prev,next today',
//         center: 'title',
//         right: 'month,agendaWeek,agendaDay'
//       },
//       editable: true,
//       selectable: true,
//       selectHelper: true,
//       select: (start, end) => {
//         var title = prompt('Event Title:');
//         var eventData;
//         if (title) {
//           eventData = {
//             title: title,
//             start: start,
//             end: end
//           };
//           $('#calendar').fullCalendar('renderEvent', eventData, true);
//         }
//         $('#calendar').fullCalendar('unselect');
//       },
//       eventClick: (event) => {
//         if (confirm('Are you sure you want to delete this event?')) {
//           $('#calendar').fullCalendar('removeEvents', event._id);
//         }
//       },
//       events: []
//     };
//     $('#calendar').fullCalendar(this.calendarOptions);
//   }

//   saveSelection() {
//     var events = $('#calendar').fullCalendar('clientEvents');
//     console.log(events);
//   }
 }
