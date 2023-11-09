import { Component } from '@angular/core';

export interface Platillos {
  nombre: string;
  color: string;
}

export interface Promociones {
  prom: string;
}

const PLATILLOS : Platillos[] = [
  { nombre: 'Bebidas', color: '#53AFB5'},
  { nombre: 'Desayunos', color: '#EF3946'},
  { nombre: 'Carnes y aves', color: '#F78F36' },
  { nombre: 'Hamburgesas y Sadwiches', color: '#7E63AB' },
  { nombre: 'Pastas', color: '#53AFB5' },
  { nombre: 'Ensaladas', color: '#EF3946' },
  { nombre: 'Postres', color: '#F78F36' },
  { nombre: 'Entradas', color: '#7E63AB' },
  { nombre: 'Pescados', color: '#53AFB5' },
  { nombre: 'Comida Mexicana', color: '#EF3946' }
]

const PROMOCION : Promociones[] = [
  {prom: 'Come Todo por $186'},
  {prom: 'Helados 2x1'},
  {prom: 'Miercoles de bebidas'},
  {prom: 'Si comes 15 tacos en menos de 15 min todo gratis'}
]

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  PLATILLOS = PLATILLOS;
  PROMOCION = PROMOCION;
  enable = true;
}
