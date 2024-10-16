import { Component, inject, Input, input, signal } from '@angular/core';
import { NavbarData } from './helper';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sub-level-menu',
  standalone: true,
  imports: [],
  template: `
    @if (collapsed() && data().items && (data().items?.length ?? 0) > 0) {
      hello
    }
  `,
  styleUrls: ['./sidenav-layout.component.scss'],
})
export class SubLevelMenuComponent {
  data = input<NavbarData>({ routerLink: '', label: '', items: [] }); 
  collapsed = input<boolean>(false);
  animating = input<boolean | undefined>();
  expanded = input<boolean | undefined>();
  multiple = input<boolean>(false);

  router = inject(Router);
}
