import { DOCUMENT } from '@angular/common';
import {Component, Inject } from '@angular/core';

export interface PeriodicElement {
  id: number;
  active: boolean;
  name: string;
  lastName: string;
  nick: string;
  profile: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, active: true, name: "Omar Uriel", lastName: 'Jimenez', nick: 'FM', profile: 'MESERO'},
  {id: 2, active: false, name: "Yessica", lastName: 'Melendez', nick: 'FM', profile: 'CAPITAN'},
  {id: 3, active: true, name: "Diego", lastName: 'Herrera', nick: 'FM', profile: 'CHEF'},
  {id: 4, active: false, name: "Karen", lastName: 'Gonzalez', nick: 'FM', profile: 'BARTMAN'},
  {id: 5, active: true, name: "Isai", lastName: 'Sanchez', nick: 'FM', profile: 'MESERO'},
  {id: 6, active: true, name: "Roberto", lastName: 'Camacho', nick: 'FM', profile: 'PRACTICANTE'},
  {id: 7, active: false, name: "Juan", lastName: 'Martinez', nick: 'FM', profile: 'MESERO'},
  {id: 8, active: true, name: "Mauricio", lastName: 'Garcia', nick: 'FM', profile: 'CAPITAN'},
  {id: 9, active: false, name: "Elba", lastName: 'Alba', nick: 'FM', profile: 'CAJERO'},
  {id: 10, active: true, name: "Dorian", lastName: 'Tobon', nick: 'FM', profile: 'CAJERO'},
];


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent{
  displayedColumns: string[] = ['id', 'active', 'name', 'lastName', 'nick', 'profile', 'lastChange', 'actions'];
  dataSource = ELEMENT_DATA;

  isDarkTheme = false;
  
  darkMode = localStorage.getItem('appearancePage');

  constructor(@Inject(DOCUMENT) private document: Document){
    this.document.body.classList.add('light-mode-2section');
  }

  onChange(newValue : boolean) : void {
    if(newValue){
      this.document.body.classList.remove('light-mode-2section');
      this.document.body.classList.add('dark-mode-2section');
    }else{
      this.document.body.classList.remove('dark-mode-2section');
      this.document.body.classList.add('light-mode-2section');
    }
  }

  panelOpenState = false;
}
