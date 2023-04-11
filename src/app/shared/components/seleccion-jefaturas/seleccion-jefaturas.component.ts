import { Component, Input } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Jefaturas, JefaturasyDependencias } from '../../services/interfaces/data.interface';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-seleccion-jefaturas',
  templateUrl: './seleccion-jefaturas.component.html',
  styleUrls: ['./seleccion-jefaturas.component.scss']
})


export class SeleccionJefaturasComponent {
  
  jefaturas: Jefaturas[] = [];
  form!: FormGroup;
  constructor(private formBuilder: FormBuilder, private dataService: DataService) { }

  ngOnInit() {
    this.jefaturas = this.dataService.fetchCategories();
    this.form = this.formBuilder.group({
      categoryId: [],
      productId: []
    }); 
  }

}