import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DevAppLayoutComponent } from './dev-app/dev-app-layout.component';

@Component({
  selector: 'dev-app',
  standalone: true,
  imports: [
    RouterOutlet,
    DevAppLayoutComponent,
  ],
  template: '<dev-app-layout><router-outlet></router-outlet></dev-app-layout>',
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {

}
