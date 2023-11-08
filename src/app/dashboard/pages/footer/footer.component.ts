import { Component } from '@angular/core';

export interface Platillos {
  nombre : string;
  clase : string;
}

const PLATILLOS : Platillos[] = [
  {
    nombre: 'Bebidas',
    clase: 'bebida'
  },
  {
    nombre: 'Desayunos',
    clase: 'desyunos'
  },
  {
    nombre: 'Carnes y aves',
    clase: 'carnes'
  },
  {
    nombre: 'Hamburgesas y Sadwiches',
    clase: 'hamburgesas'
  },
  {
    nombre: 'Pastas',
    clase: 'pastas'
  },
  {
    nombre: 'Ensaladas',
    clase: 'enchi'
  },
  {
    nombre: 'Postres',
    clase: 'postres'
  },
  {
    nombre: 'Entradas',
    clase: 'entra'
  },
  {
    nombre: 'Pescados',
    clase: 'pes'
  },
  {
    nombre: 'Comida Mexicana',
    clase: 'mexican'
  }
]


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  PLATILLOS = PLATILLOS;
  enable = true;
}
