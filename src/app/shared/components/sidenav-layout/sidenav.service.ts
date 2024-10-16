import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  collapsed = signal(false);

  setCollapsed(collapsed: boolean): void {
    this.collapsed.set(collapsed);
  }
}