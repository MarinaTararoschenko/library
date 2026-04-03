import { Component, Input } from "@angular/core";

@Component({
    standalone: true,
    selector: 'app-docs-card-tag',
    template: `
        <span>{{text}}</span>
    `,
    styles: `
        :host {
            position: relative;
            font: 500 var(--ds-font-text-s);
            color: #9747FF;
            padding: 4px;
            border-radius: 8px;
            background: rgba(151, 71, 255, 0.10);
            white-space: nowrap;

            &.top::before,
            &.bottom::before {
                content: "";
                position: absolute;
                width: 1px;
                height: 20px;
                background: #9747FF;
            }

            &.start::before,
            &.end::before {
                content: "";
                position: absolute;
                width: 20px;
                height: 1px;
                background: #9747FF;
            }

            &.top::after,
            &.bottom::after,
            &.start::after,
            &.end::after {
                content: "";
                position: absolute;
                width: 4px;
                height: 4px;
                border-radius: 50%;
                background: #9747FF;
            }

            &.top {
                top: 0;
                left: 50%;
                transform: translateX(-50%);
                margin-bottom: 35px;

                &::before {
                    top: 100%;
                    left: 50%;
                    transform: translateX(-50%);
                    margin-top: 4px;
                }

                &::after {
                    top: calc(100% + 24px);
                    left: 50%;
                    transform: translateX(-50%);
                }
            }

            &.bottom {
                bottom: 0;
                left: 50%;
                transform: translateX(-50%);
                margin-top: 35px;

                &::before {
                    bottom: 100%;
                    left: 50%;
                    transform: translateX(-50%);
                    margin-bottom: 4px;
                }

                &::after {
                    bottom: calc(100% + 24px);
                    left: 50%;
                    transform: translateX(-50%);
                }
            }

            &.start {
                right: calc(100% + 60px);
                top: 50%;
                transform: translateY(-50%);
                margin-left: 35px;

                &::before {
                    left: 100%;
                    top: 50%;
                    transform: translateY(-50%);
                    margin-left: 4px;
                }

                &::after {
                    left: calc(100% + 24px);
                    top: 50%;
                    transform: translateY(-50%);
                }
            }

            &.end {
                left: calc(100% + 60px);
                top: 50%;
                transform: translateY(-50%);

                &::before {
                    right: 100%;
                    top: 50%;
                    transform: translateY(-50%);
                    margin-right: 4px;
                }

                &::after {
                    right: calc(100% + 24px);
                    top: 50%;
                    transform: translateY(-50%);
                }
            }
        }
    `,
})
export class DocsCardTagComponent {
    @Input() public text!: string;
}
