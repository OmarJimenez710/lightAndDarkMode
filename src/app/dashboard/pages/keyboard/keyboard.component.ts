import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss']
})
export class KeyboardComponent implements OnInit{
  numeros : Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  numerosInput: Array<number> = [];
  paraInput: String = '';

  constructor(){

  }

  ngOnInit(): void {
    this.shuffle(this.numeros);
  }

  shuffle(array : Array<number>) {
    array.sort(() => Math.random() - 0.5);
  }

  aniadir(numero : number){
    this.paraInput = '';
    this.numerosInput.push(numero);
    this.paraInput = this.numerosInput.toString().replaceAll(',','');
  }

  eliminar(){
    this.paraInput = '';
    this.numerosInput.pop();
    this.paraInput = this.numerosInput.toString().replaceAll(',','');
  }
}

