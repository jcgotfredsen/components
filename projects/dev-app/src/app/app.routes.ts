import { Routes } from '@angular/router';
import { DevApp404Component } from './dev-app/dev-app-404.component';
import { DevAppHomeComponent } from './dev-app/dev-app-home.component';

export const routes: Routes = [
  { path: '', component: DevAppHomeComponent },
  {
    path: 'button',
    loadComponent: () => import('./button/button-demo.component').then(m => m.ButtonDemoComponent),
  },
  {
    path: 'input',
    loadComponent: () => import('./input/input-demo.component').then(m => m.InputDemoComponent),
  },
  { path: '**', component: DevApp404Component },
];
