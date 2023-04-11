
export interface JefaturasyDependencias {
    jefaturaZonal: string;
    dependencia: string;
    cantidadDeLibretas: number;
    porcentajedeLibretas: number;
    activo: boolean;
  }

  export interface Jefaturas {
    id: number;
    name: string;
  }

  export interface Dependencias {
    id: number;
    name: string;
    categoryId: number
  }