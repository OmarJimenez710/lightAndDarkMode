import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'KoobenPos';

  isDarkTheme = false;

  constructor(@Inject(DOCUMENT) private document: Document){
    this.document.body.classList.add('light-mode-2section');
    this.document.body.style.background = '#fff';
  }

  onChange(newValue : boolean) : void {
    if(newValue){
      this.document.body.classList.remove('light-mode-2section');
      this.document.body.classList.add('dark-mode-2section');
      this.document.body.style.background = '#5E5B65';
    }else{
      this.document.body.classList.remove('dark-mode-2section');
      this.document.body.classList.add('light-mode-2section');
      this.document.body.style.background = '#fff';
    }
  }
}
