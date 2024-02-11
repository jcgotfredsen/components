import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'dev-app-home',
  standalone: true,
  template: `
    <p>Welcome to the development demos for Spectrum Components!</p>
    <p>Open the sidenav to select a demo.</p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DevAppHomeComponent { }
