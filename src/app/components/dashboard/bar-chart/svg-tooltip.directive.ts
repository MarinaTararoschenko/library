import {
    ComponentFactoryResolver,
    ComponentRef,
    Directive,
    ElementRef,
    HostListener,
    Input,
    Renderer2,
    ViewContainerRef
} from "@angular/core";

import { SvgTooltipComponent } from "./svg-tooltip/svg-tooltip.component";

@Directive({
    selector: '[svgTooltip]'
})
export class SvgTooltipDirective {
    @Input() public svgTooltipText!: string;

    public componentRef!: ComponentRef<any>;
    public tooltip: any;
    public parentRect: any;

    @HostListener('mouseenter') public onMouseEnter(): void {
        this.showTooltip();
    }

    @HostListener('mouseleave') public onMouseLeave(): void {
        this.hideTooltip();
    }

    constructor(
        private _el: ElementRef,
        private _renderer: Renderer2,
        private _viewContainerRef: ViewContainerRef,
        private _resolver: ComponentFactoryResolver
    ) {

    }

    private showTooltip(): void {
        this._viewContainerRef.clear();
        const factory = this._resolver.resolveComponentFactory(SvgTooltipComponent);
        this.componentRef = this._viewContainerRef.createComponent(factory);
        this.componentRef.instance.text = this.svgTooltipText;
        this._renderer.appendChild(document.body, this.componentRef.location.nativeElement);
        this.parentRect = this._el.nativeElement.getBoundingClientRect();

        setTimeout(() => {
            this.componentRef.instance.style = {
                'top': `${this.parentRect.top}px`,
                'left': `${this.parentRect.left}px`,
                'transform': 'scale(1) translate(-50%, -100%)',
                'margin-bottom': '10px'
            }
        }, 0);
    }

    private hideTooltip(): void {
        this.componentRef.instance.style = {
            'top': `${this.parentRect.top}px`,
            'left': `${this.parentRect.left}px`,
            'transform': 'scale(0) translate(-50%, -100%)'
        }

        setTimeout(() => {
            this._viewContainerRef.clear();
        }, 100);
    }

}
