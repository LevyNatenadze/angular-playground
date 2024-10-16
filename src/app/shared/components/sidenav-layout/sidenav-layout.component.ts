import { Component, HostListener, inject, ViewChild } from '@angular/core';
import {  RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';
import { NavbarData } from './helper';
import { navbarData } from './nav-data';
import { ResizeObserverDirective } from '../../directive/resize-observer.directive';
import { SidenavService } from './sidenav.service';
import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { SubLevelMenuComponent } from "./sub-level-menu.component";

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [
    RouterModule,
    HeaderComponent,
    CommonModule,
    ResizeObserverDirective,
    SubLevelMenuComponent
],
  templateUrl: './sidenav-layout.component.html',
  styleUrl: './sidenav-layout.component.scss',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({opacity: 0}),
        animate('350ms',
          style({opacity: 1})
        )
      ]),
      transition(':leave', [
        style({opacity: 1}),
        animate('350ms',
          style({opacity: 0})
        )
      ])
    ]),
    trigger('rotate', [
      transition(':enter', [
        animate('1000ms', 
          keyframes([
            style({transform: 'rotate(0deg)', offset: '0'}),
            style({transform: 'rotate(2turn)', offset: '1'})
          ])
        )
      ])
    ])
  ]
})
export class SidenavLayoutComponent {
  collapsed: boolean = false;
  sidenavService = inject(SidenavService);
  screenWidth = 0;
  navbarData: NavbarData[] = navbarData;
  multiple: boolean = false;

  toggleCollapse() {
    this.collapsed = !this.collapsed;
    this.sidenavService.setCollapsed(this.collapsed);
  }

  handleClick() {}

  getActiveClass() {
    return '';
  }
}
