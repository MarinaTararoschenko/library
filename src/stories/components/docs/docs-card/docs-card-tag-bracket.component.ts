import { Component, HostBinding, Input } from "@angular/core";

import { DocsCardTagComponent } from "./docs-card-tag.component";

@Component({
    standalone: true,
    selector: 'app-docs-card-tag-bracket',
    template: `
        <app-docs-card-tag [text]="text"></app-docs-card-tag>
    `,
    styles: `
        :host {
            position: relative;
            display: flex;

            &.top {
                justify-content: center;
                padding-bottom: 26px;

                &.size-xl {
                    height: 64px;
                }

                &::after {
                    content: "";
                    position: absolute;
                    right: 0;
                    left: 0;
                    bottom: 0;
                    height: 14px;
                    border: 1px solid #9747FF;
                    border-radius: 5px;
                    border-bottom-left-radius: 0;
                    border-bottom-right-radius: 0;
                    border-bottom-color: transparent;
                }

                app-docs-card-tag {
                    margin: auto auto 0;
                }
            }

            &.left {
                align-items: flex-end;
                padding-right: 26px;

                &::after {
                    content: "";
                    position: absolute;
                    right: 0;
                    top: 0;
                    bottom: 0;
                    width: 14px;
                    border: 1px solid #9747FF;
                    border-radius: 5px;
                    border-top-right-radius: 0;
                    border-bottom-right-radius: 0;
                    border-right-color: transparent;
                }

                app-docs-card-tag {
                    margin: auto 0 auto auto;
                }
            }
        }
    `,
    imports: [DocsCardTagComponent]
})
export class DocsCardTagBracketComponent {
    @Input() public text!: string;

    public currentPosition: 'top' | 'left' = 'top'

    @Input() public set position(value: 'top' | 'left') {
        if (value !== null) {
            this.currentPosition = value;
        }
    }

    @HostBinding('class') public get hostClass() {
        return this.currentPosition;
    }
}
