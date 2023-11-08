import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableModule } from './dashboard/pages/table/table.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { TableDosComponent } from './dashboard/pages/table-dos/table-dos.component';
import { FooterModule } from './dashboard/pages/footer/footer.module'
import { KeyboardModule } from './dashboard/pages/keyboard/keyboard.module';

@NgModule({
  declarations: [
    AppComponent,
    TableDosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    BrowserAnimationsModule,
    SharedModule,
    FooterModule,
    KeyboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
