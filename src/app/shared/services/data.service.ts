import { Injectable } from "@angular/core";
import { Jefaturas, JefaturasyDependencias, Dependencias } from "./interfaces/data.interface";

const jefaturas: Jefaturas [] = [
  { id: 1, name: 'Lima' },
  { id: 2, name: 'Arequipa' },
  { id: 3, name: 'Callao' },
  { id: 4, name: 'Chiclayo' },
  { id: 5, name: 'Chimbote' },
  { id: 6, name: 'Cusco' },
  { id: 7, name: 'Huancayo' },
  { id: 8, name: 'Ilo' },
  { id: 9, name: 'Iquitos' },
  { id: 10, name: 'Puerto Maldonado' },
  { id: 11, name: 'Piura' },
  { id: 12, name: 'Tacna' },
  { id: 13, name: 'Tarapoto' },
  { id: 14, name: 'Trujillo' },
  { id: 15, name: 'Tumbes' },

];
const dependencias: Dependencias [] = [
  { id: 1, name: 'Breña', categoryId: 1 },
  { id: 2, name: 'MAC 1', categoryId: 1 },
  { id: 3, name: 'MAC 2', categoryId: 1 },
  { id: 4, name: 'Jockey Plaza', categoryId: 1 },
  { id: 5, name: 'La Molina', categoryId: 1 },
  { id: 6, name: 'Arequipa', categoryId: 2 },
  { id: 7, name: 'Callao', categoryId: 3 },
  { id: 8, name: 'Chiclayo', categoryId: 4},
  { id: 9, name: 'Chimbote', categoryId: 5 },
  { id: 10, name: 'Cusco', categoryId: 6 },
  { id: 11, name: 'Huancayo', categoryId: 7 },
  { id: 12, name: 'Ilo', categoryId: 8 },
  { id: 13, name: 'Iquitos', categoryId: 9 },
  { id: 14, name: 'Puerto Maldonado', categoryId: 10 },
  { id: 15, name: 'Piura', categoryId: 11 },
  { id: 16, name: 'Tacna', categoryId: 12 },
  { id: 17, name: 'Tarapoto', categoryId: 13 },
  { id: 18, name: 'Trujillo', categoryId: 14 },
  { id: 19, name: 'Tumbes', categoryId: 15 },
 
];

@Injectable()
export class DataService {

  constructor() { }

  fetchCategories() {
    return jefaturas;
  }

  fetchProducts(categoryId: number) {
    return dependencias.filter(dependencias => dependencias.categoryId == categoryId);
  }
    
   private _oficinas : JefaturasyDependencias [] = [
        {
          jefaturaZonal: 'Lima',
          dependencia: 'Breña',
          cantidadDeLibretas: 100,
          porcentajedeLibretas: 1,
          activo: true, 
        },
        {
          jefaturaZonal: 'Arequipa',
          dependencia: 'MAC 1',
          cantidadDeLibretas: 100,
          porcentajedeLibretas: 0.56,
          activo: false, 
        },
        {
          jefaturaZonal: 'Cusco',
          dependencia: 'MAC 2',
          cantidadDeLibretas: 100,
          porcentajedeLibretas: 0.8,
          activo: true, 
        }
      ];

      get oficinas(): JefaturasyDependencias[] {
        return [...this._oficinas];
      }

      agregar( oficinas: JefaturasyDependencias) {
        this._oficinas.push(oficinas);
      }

}
