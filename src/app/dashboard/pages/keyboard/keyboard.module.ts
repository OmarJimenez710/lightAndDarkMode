import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KeyboardRoutingModule } from './keyboard-routing.module';
import { KeyboardComponent } from './keyboard.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    KeyboardComponent
  ],
  imports: [
    CommonModule,
    KeyboardRoutingModule,
    SharedModule
  ],
  exports: [
    KeyboardComponent
  ]
})
export class KeyboardModule { }
