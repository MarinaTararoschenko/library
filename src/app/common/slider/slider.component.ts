import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, ElementRef, HostListener, Inject, OnDestroy, PLATFORM_ID, ViewChild } from '@angular/core';

interface ISlider {
    title: string;
    suptitle: string;
}

interface ISliderProps {
    parent: any;
    slideMove: number;
    slideActive: number;
    itemWidth: number;
    gap: number;
    swipe: boolean;
    data: Array<ISlider>;
}

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements AfterViewInit, OnDestroy {
    @ViewChild('carousel') public slider!: ElementRef;

    public sliderData: Array<ISlider> = [
        {
            title: 'Slide 1',
            suptitle: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit.'
        },
        {
            title: 'Slide 2',
            suptitle: 'Lorem ipsum dolor sit.'
        },
        {
            title: 'Slide 3',
            suptitle: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
        },
        {
            title: 'Slide 4',
            suptitle: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
        },
        {
            title: 'Slide 5',
            suptitle: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
        },
        {
            title: 'Slide 6',
            suptitle: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
        },
        {
            title: 'Slide 7',
            suptitle: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
        },
        {
            title: 'Slide 8',
            suptitle: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
        }
    ];

    public sliderProps!: ISliderProps;

    private container: any;
    private drag: { pressed: boolean; startPosition: number; newPosition: number } = {
        pressed: false, startPosition: 0, newPosition: 0
    };
    private start!: (v: any) => void;
    private move!: (v: any) => void;
    private stop!: () => void;
    public isNextDisabled = false;
    public isPrevDisabled = true;
    private itemsVisible!: number;

    @HostListener('window:resize')
    onResize() {
        if (isPlatformBrowser(this.platformId)) {
            this.initSlider();
        }
    }

    constructor(
        @Inject(PLATFORM_ID) private platformId: any
    ) { }

    ngAfterViewInit(): void {
        if (isPlatformBrowser(this.platformId)) {
            this.initSlider();
        }
    }

    ngOnDestroy(): void {
        if (this._checkTouchDevice()) {
            this.container?.removeEventListener('touchstart', this.start, false);
            this.container?.removeEventListener('touchmove', this.move, false);
        } else {

            this.container?.removeEventListener('mousedown', this.start, false);
            this.container?.removeEventListener('mousemove', this.move, false);
            this.container?.removeEventListener('mouseleave', this.stop, false);
            this.container?.removeEventListener('mouseup', this.stop, false);
        }
    }

    public initSlider(): void {
        this.sliderProps = {
            parent: this.slider.nativeElement,
            slideMove: 1,
            slideActive: 0,
            itemWidth: 320,
            gap: 15,
            swipe: true,
            data: this.sliderData
        };

        this.container = this.sliderProps.parent.children[0];
        this.container.style.columnGap = this.sliderProps.gap + 'px';
        this.container.style.width =
            (this.sliderProps.itemWidth * this.sliderData.length) +
            (this.sliderProps.gap * (this.sliderData.length - 1)) + 'px';
        this.container.children[this.sliderProps.slideActive].classList.add('active');
        this.itemsVisible = Math.floor(this.sliderProps.parent.getBoundingClientRect().width / (this.sliderProps.itemWidth + this.sliderProps.gap));

        if (this.sliderProps.swipe) {
            this.dragging();
        }
    }

    public dragging(): void {
        this.drag = { pressed: false, startPosition: 0, newPosition: 0 }

        this.start = (e) => {
            this.drag.pressed = true;
            this.drag.startPosition = (e.pageX || e.touches[0].clientX) - (this.container.getBoundingClientRect().left);
            this.container.style.cursor = 'grabbing';
        }

        this.move = (e) => {
            if (!this.drag.pressed) return;
            e.preventDefault();

            const currentX = (e.pageX || e.touches[0].clientX) < 0 ? 0 : (e.pageX || e.touches[0].clientX);
            const dist = currentX - (this.sliderProps.parent.getBoundingClientRect().left);

            this.drag.newPosition = dist - this.drag.startPosition;
            this.container.style.transform = `translate3d(${this.drag.newPosition}px, 0px, 0px)`;
            this.container.style.transitionDuration = '0s';
        }

        this.stop = () => {
            const parentRect = this.sliderProps.parent.getBoundingClientRect();
            const containerRect = this.container.getBoundingClientRect();
            const children = this.container.children;
            children[this.sliderProps.slideActive].classList.remove('active');

            if (containerRect.left > parentRect.left) {
                this.sliderProps.slideActive = 0;
            } else {
                let currentSlide = Math.round(Math.abs(this.drag.newPosition) / this.sliderProps.itemWidth);

                if (currentSlide + this.itemsVisible - 1 <= this.container.children.length - 1) {
                    this.sliderProps.slideActive = currentSlide;
                }
            }

            children[this.sliderProps.slideActive].classList.add('active');

            this.drag.newPosition = -(this.sliderProps.slideActive * (this.sliderProps.itemWidth + this.sliderProps.gap));
            this.container.style.transform = `translate3d(${this.drag.newPosition}px, 0px, 0px)`;
            this.container.style.cursor = 'grab';
            this.container.style.transitionDuration = '.4s';
            this.drag.pressed = false;
            this.isPrevDisabled = this.sliderProps.slideActive === 0;
            this.isNextDisabled = containerRect.width - Math.abs(this.drag.newPosition) + this.sliderProps.gap < parentRect.width;
        }

        if (this._checkTouchDevice()) {
            // touch event
            this.container.addEventListener('touchstart', this.start, false);
            this.container.addEventListener('touchmove', this.move, false);
            this.container.addEventListener('touchend', this.stop, false);
        } else {
            // mouse event
            this.container.addEventListener('mousedown', this.start, false);
            this.container.addEventListener('mousemove', this.move, false);
            this.container.addEventListener('mouseleave', this.stop, false);
            this.container.addEventListener('mouseup', this.stop, false);
        }
    }

    public moveSlider(direction: string): void {
        const parentRect = this.sliderProps.parent.getBoundingClientRect();
        const containerRect = this.container.getBoundingClientRect();
        const children = this.container.children;
        children[this.sliderProps.slideActive].classList.remove('active');

        if (direction === 'prev') {
            if (this.drag.newPosition < 0) {
                if (Math.round(this.drag.newPosition / (this.sliderProps.itemWidth + this.sliderProps.gap)) > -2) {
                    this.sliderProps.slideActive = 0;
                    this.drag.newPosition = 0;
                } else {
                    this.sliderProps.slideActive--;
                    this.drag.newPosition = this.sliderProps.itemWidth + this.sliderProps.gap + this.drag.newPosition;
                }
            }
            this.isNextDisabled = false;
        } else if (direction === 'next') {
            if (containerRect.right + this.sliderProps.gap > parentRect.right) {
                this.sliderProps.slideActive++;
                this.drag.newPosition = -(this.sliderProps.itemWidth + this.sliderProps.gap) + this.drag.newPosition;
            }
            this.isNextDisabled = (containerRect.right - this.sliderProps.itemWidth) < parentRect.right;
        }

        children[this.sliderProps.slideActive].classList.add('active');
        this.container.style.transform = `translate3d(${this.drag.newPosition}px, 0px, 0px)`;
        this.isPrevDisabled = this.sliderProps.slideActive === 0;
    }

    private _checkTouchDevice(): boolean {
        return 'ontouchstart' in document.documentElement;
    }
}
