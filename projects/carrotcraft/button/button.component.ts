import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, booleanAttribute } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'spec-button',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  /** Sets the overall height and width of the button based on the following string values. */
  @Input() size: 'mini' | 'compact' | 'default' | 'large' = 'default';
  /** Defines the shape of the button. */
  @Input() shape: 'rectangle' | 'square' | 'pill' | 'circle' = 'rectangle';
  /** Lets you customize the background and text color. */
  @Input() color: 'neutral' | 'positive' | 'warning' | 'negative' = 'neutral';
  /** Defines the kind (purpose) of a button. */
  @Input() kind: 'primary' | 'secondary' | 'tertiary' = 'primary';
  /** Button input type */
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  /** Sets if the button should be full width with display block */
  @Input({ transform: booleanAttribute }) block = false;
  /** Display as disabled button. */
  @Input({ transform: booleanAttribute }) disabled = false;
  /** Show loading button style and spinner. */
  @Input({ transform: booleanAttribute }) loading = false;
  /** Indicates that the button is selected. */
  @Input({ transform: booleanAttribute }) selected = false;
  /** Accessibility Label */
  @Input() label: string | null = null;
  /** URL to link to */
  @Input() url: string | null = null;
  /** Make this button an angular router link */
  @Input() routerLink: string | string[] | null = null;
  /** Icon to be shown on the button. */
  @Input() icon: string | null = null;

  @Output() action: EventEmitter<MouseEvent | PointerEvent> = new EventEmitter();
}
