import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { InputComponent } from '@spectrum/components/input';

@Component({
  selector: 'dev-input-demo',
  standalone: true,
  imports: [
    CommonModule,
    InputComponent,
  ],
  templateUrl: './input-demo.component.html',
  styleUrl: './input-demo.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputDemoComponent { }
