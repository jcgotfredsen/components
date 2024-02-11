import { CommonModule, DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, Inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '@spectrum/components/button';
import { getAppState, setAppState } from './dev-app-state';

@Component({
  selector: 'dev-app-layout',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    RouterModule,
  ],
  templateUrl: './dev-app-layout.component.html',
  styleUrl: './dev-app-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DevAppLayoutComponent {
  state = getAppState();
  navItems = [
    // { name: 'Examples', route: '/examples' },
    // { name: 'CDK Dialog', route: '/cdk-dialog' },
    // { name: 'CDK Experimental Combobox', route: '/cdk-experimental-combobox' },
    // { name: 'CDK Listbox', route: '/cdk-listbox' },
    // { name: 'CDK Menu', route: '/cdk-menu' },
    // { name: 'Autocomplete', route: '/autocomplete' },
    // { name: 'Badge', route: '/badge' },
    // { name: 'Bottom Sheet', route: '/bottom-sheet' },
    // { name: 'Button Toggle', route: '/button-toggle' },
    { name: 'Button', route: '/button' },
    // { name: 'Card', route: '/card' },
    // { name: 'Checkbox', route: '/checkbox' },
    // { name: 'Chips', route: '/chips' },
    // { name: 'Clipboard', route: '/clipboard' },
    // { name: 'Column Resize', route: 'column-resize' },
    // { name: 'Connected Overlay', route: '/connected-overlay' },
    // { name: 'Datepicker', route: '/datepicker' },
    // { name: 'Dialog', route: '/dialog' },
    // { name: 'Drag and Drop', route: '/drag-drop' },
    // { name: 'Drawer', route: '/drawer' },
    // { name: 'Expansion Panel', route: '/expansion' },
    // { name: 'Focus Origin', route: '/focus-origin' },
    // { name: 'Focus Trap', route: '/focus-trap' },
    // { name: 'Google Map', route: '/google-map' },
    // { name: 'Grid List', route: '/grid-list' },
    // { name: 'Icon', route: '/icon' },
    // { name: 'Input Modality', route: '/input-modality' },
    { name: 'Input', route: '/input' },
    // { name: 'Layout', route: '/layout' },
    // { name: 'List', route: '/list' },
    // { name: 'Live Announcer', route: '/live-announcer' },
    // { name: 'Menu', route: '/menu' },
    // { name: 'Menubar', route: '/menubar' },
    // { name: 'Paginator', route: '/paginator' },
    // { name: 'Platform', route: '/platform' },
    // { name: 'Popover Edit', route: '/popover-edit' },
    // { name: 'Portal', route: '/portal' },
    // { name: 'Progress Bar', route: '/progress-bar' },
    // { name: 'Progress Spinner', route: '/progress-spinner' },
    // { name: 'Radio', route: '/radio' },
    // { name: 'Ripple', route: '/ripple' },
    // { name: 'Screen Type', route: '/screen-type' },
    // { name: 'Select', route: '/select' },
    // { name: 'Selection', route: '/selection' },
    // { name: 'Sidenav', route: '/sidenav' },
    // { name: 'Slide Toggle', route: '/slide-toggle' },
    // { name: 'Slider', route: '/slider' },
    // { name: 'Snack Bar', route: '/snack-bar' },
    // { name: 'Stepper', route: '/stepper' },
    // { name: 'Table Scroll Container', route: '/table-scroll-container' },
    // { name: 'Table', route: '/table' },
    // { name: 'Tabs', route: '/tabs' },
    // { name: 'Toolbar', route: '/toolbar' },
    // { name: 'Tooltip', route: '/tooltip' },
    // { name: 'Tree', route: '/tree' },
    // { name: 'Typography', route: '/typography' },
    // { name: 'Virtual Scrolling', route: '/virtual-scroll' },
    // { name: 'YouTube Player', route: '/youtube-player' },
  ];

  /** List of possible global density scale values. */
  private _densityScales = [0, -1, -2, -3, -4, 'minimum', 'maximum'];

  constructor(
    private _element: ElementRef<HTMLElement>,
    @Inject(DOCUMENT) private _document: Document,
  ) {
    this.toggleTheme(this.state.darkTheme);
    this.toggleStrongFocus(this.state.strongFocusEnabled);
    this.toggleDensity(Math.max(this._densityScales.indexOf(this.state.density), 0));
  }

  toggleTheme(value = !this.state.darkTheme) {
    this.state.darkTheme = value;
    this._document.body.classList.toggle('demo-unicorn-dark-theme', value);
    setAppState(this.state);
  }

  toggleFullscreen() {
    this._element.nativeElement.querySelector('.demo-content')?.requestFullscreen();
  }

  toggleStrongFocus(value = !this.state.strongFocusEnabled) {
    this.state.strongFocusEnabled = value;
    this._document.body.classList.toggle('demo-strong-focus', value);
    setAppState(this.state);
  }

  toggleAnimations() {
    this.state.animations = !this.state.animations;
    setAppState(this.state);
    location.reload();
  }

  toggleDensity(index?: number) {
    if (index == null) {
      index = (this._densityScales.indexOf(this.state.density) + 1) % this._densityScales.length;
    }

    this.state.density = this._densityScales[index];
    setAppState(this.state);
  }

  getDensityClass() {
    return `demo-density-${this.state.density}`;
  }

}
