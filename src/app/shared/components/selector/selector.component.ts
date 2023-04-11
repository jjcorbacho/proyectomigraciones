import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Jefaturas, Dependencias } from '../../services/interfaces/data.interface';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss']
})
export class SelectorComponent {
  jefaturas: Jefaturas[] = [];
  dependencias: Dependencias[] = [];
  form!: FormGroup;
  constructor(private formBuilder: FormBuilder, private dataService: DataService) { }

  ngOnInit() {
    this.jefaturas = this.dataService.fetchCategories();
    this.form = this.formBuilder.group({
      categoryId: [],
      productId: []
    }); 
  }

  onCategoryChange(event: { value: number; }) {
    this.dependencias = this.dataService.fetchProducts(event.value);
    this.form.patchValue;
  }

  save() {
    console.log(this.form.value);
    console.log();
  }

}
