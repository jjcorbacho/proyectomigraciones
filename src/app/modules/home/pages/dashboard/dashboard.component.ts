import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor(private route: Router) {
  }

  fnIngresar(): void {
    this.route.navigate(['/citas/busqueda']);
  }

}
