import { Directive, ElementRef, inject, input, OnDestroy, Renderer2 } from "@angular/core";
import {debounceTime, fromEvent, Subscription } from "rxjs";
import { SidenavService } from "../components/sidenav-layout/sidenav.service";


@Directive({
    selector: '[resizeObserver]',
    standalone: true
})
export class ResizeObserverDirective implements OnDestroy{
    renderer = inject(Renderer2);
    className = input<string>('');
    elementRef = inject(ElementRef);
    protected resizeObserver!: ResizeObserver;
    protected subscription: Subscription;
    protected sidenavService = inject(SidenavService);

    constructor() {
        this.subscription = fromEvent(window, 'resize')
            .pipe(debounceTime(100))
            .subscribe(() => this.onResize(window.innerWidth));
        this.onResize(window.innerWidth);
    }

    onResize(width: number): void {
        if(width > 768) {
            this.addClass();
        } else {
           this.removeClass();
        }
    }

    addClass(): void {
        if(this.className()) {
            this.renderer.addClass(this.elementRef.nativeElement, this.className());
            if(this.className() === 'sidenav-collapsed') {
                this.sidenavService.setCollapsed(true);
            }
        }    
    }

    removeClass(): void {
        if(this.className()) {
            this.renderer.removeClass(this.elementRef.nativeElement, this.className());
            if(this.className() === 'sidenav-collapsed') {
                this.sidenavService.setCollapsed(false);
            }
        }  
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

}