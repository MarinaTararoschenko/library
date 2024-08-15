import { AnimationBuilder, AnimationPlayer, animate, keyframes, style } from "@angular/animations";
import { Directive, ElementRef, EmbeddedViewRef, HostListener, Input, OnInit, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
    selector: '[appTooltip]'
})
export class TooltipDirective implements OnInit {
    @Input() public templateRef!: TemplateRef<Object>;
    @Input() public position!: { y: string; x: string};

    public view!: EmbeddedViewRef<Object>;
    public buttonPlayer: AnimationPlayer | undefined;
    public transformAnimations: any;

    @HostListener("mouseenter") onMouseEnter(): void {
        this.view = this._viewContainerRef.createEmbeddedView(this.templateRef);

        setTimeout(() => {
            this._animateColors('show')
            this.view.rootNodes[0].classList.add('show');
        }, 100);
    }

    @HostListener("mouseleave") onMouseLeave(): void {
        if (this._viewContainerRef) {
            this.view.rootNodes[0].classList.remove('show');
            this._animateColors('hide');

            setTimeout(() => {
                this._viewContainerRef.clear();
            }, 150);
        }
    }

    constructor(
        private _el: ElementRef,
        private _viewContainerRef: ViewContainerRef,
        private _builder: AnimationBuilder
    ) {}

    ngOnInit(): void {
        this._el.nativeElement.style.cursor = 'pointer';
    }

    private _animateColors(state: string): void {
        if (this.buttonPlayer) {
            this.buttonPlayer.destroy();
        }
        const parentBounding = this._el.nativeElement.getBoundingClientRect();
        const tooltip = this.view.rootNodes[0];

        if (state === 'show') {
            let positionY = '0px';
            let positionLeft = 'auto';
            let positionRight = 'auto';

            if (this.position.y === 'top') {
                positionY = parentBounding.top > tooltip.offsetHeight + 8 ? parentBounding.top - tooltip.offsetHeight - 8 + 'px' : parentBounding.bottom + 8 + 'px';
            } else {
                positionY = parentBounding.bottom + tooltip.offsetHeight + 8 < window.innerHeight ? parentBounding.bottom + 8 : parentBounding.top - tooltip.offsetHeight - 8;
            }

            if (this.position.x === 'start') {
                positionLeft = parentBounding.left + 'px';
            } else {
                positionRight = window.innerWidth - parentBounding.right + 'px';
            }
            this.transformAnimations = animate('.2s ease-in-out', keyframes([
                style({
                    top: positionY,
                    left: positionLeft,
                    right: positionRight,
                    transform: 'scale(0)'
                }),
                style({
                    transform: 'scale(1)'
                })
            ]));
        } else if (state === 'hide') {
            this.transformAnimations = animate('0.1s ease-out', keyframes([
                style({
                    transform: 'scale(0)',
                    opacity: '0'
                })
            ]));
        }

        const buttonPlayer = this._builder.build(this.transformAnimations).create(this.view.rootNodes[0]);
        buttonPlayer.play();
    }
}
