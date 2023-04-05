import { Injectable } from "@angular/core";
import { JefaturasyDependencias } from "./interfaces/data.interface";

@Injectable()
export class DataService {
    
   private _oficinas : JefaturasyDependencias [] = [
        {
          jefaturaZonal: 'Lima',
          dependencia: 'Breña',
          cantidadDeLibretas: 100,
          porcentajedeLibretas: 100,
          activo: true, 
        },
        {
          jefaturaZonal: 'Arequipa',
          dependencia: 'MAC 1',
          cantidadDeLibretas: 100,
          porcentajedeLibretas: 100,
          activo: true, 
        },
        {
          jefaturaZonal: 'Cusco',
          dependencia: 'MAC 2',
          cantidadDeLibretas: 100,
          porcentajedeLibretas: 100,
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
