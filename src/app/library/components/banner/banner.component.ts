import { Component, HostBinding, Input } from '@angular/core';

@Component({
    standalone: true,
    selector: 'app-banner',
    templateUrl: './banner.component.html',
    styleUrl: './banner.component.scss',
})
export class BannerComponent {
    public currentStyle: 'info' | 'warn' | 'error' = 'info';

    @Input() public set style(value: 'info' | 'warn' | 'error') {
        this.currentStyle = value;
    }

    @HostBinding('class') public get classes() {
        return 'banner-' + this.currentStyle;
    }
}
