import { Component, Renderer2, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    isOpenedSidenav = false;

    constructor(
        private renderer: Renderer2
    ) {
    }

    getScrollEvent(ev: any): void {
        const startScroll = window.innerWidth > 670 ? 64 : 48;

        if (ev.srcElement.scrollTop >= startScroll) {
            this.renderer.addClass(document.body, 'fixed-header');
        } else {
            this.renderer.removeClass(document.body, 'fixed-header');
        }
    }

    getStateSidebar(state: any): void {
        this.isOpenedSidenav = state;
    }
}
