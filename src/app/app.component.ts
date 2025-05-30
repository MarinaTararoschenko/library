import { DOCUMENT } from '@angular/common';
import { Component, Inject, Renderer2, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    isOpenedSidenav = false;

    constructor(
        @Inject(DOCUMENT) private doc:Document,
        private renderer: Renderer2
    ) {
    }

    getScrollEvent(ev: any): void {
        const body = this.doc.body;
        const startScroll = window.innerWidth > 670 ? 64 : 48;

        if (ev.srcElement.scrollTop >= startScroll) {
            this.renderer.addClass(body, 'fixed-header');
        } else {
            this.renderer.removeClass(body, 'fixed-header');
        }
    }

    getStateSidebar(state: any): void {
        this.isOpenedSidenav = state;
    }
}
