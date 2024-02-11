import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonComponent } from '@spectrum/components/button';

@Component({
  selector: 'dev-button-demo',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
  ],
  templateUrl: './button-demo.component.html',
  styleUrl: './button-demo.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonDemoComponent { }
