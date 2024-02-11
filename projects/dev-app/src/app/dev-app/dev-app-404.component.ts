import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '@spectrum/components/button';

@Component({
  selector: 'dev-app-404',
  standalone: true,
  imports: [
    ButtonComponent,
    RouterModule,
  ],
  template: `
    <h1>404</h1>
    <p>This page does not exist</p>
    <spec-button routerLink="/">
      Go back to the home page
    </spec-button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DevApp404Component { }
