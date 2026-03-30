/*
 * Public API Surface of library
 */

// Components
export { ButtonComponent } from './app/library/components/buttons/button/button.component';
export { IconButtonComponent } from './app/library/components/buttons/icon-button/icon-button.component';

// Types
export type {
    IButton,
    ButtonType,
    ButtonTheme,
    ButtonSize
} from './app/library/components/buttons/button/button.component';

export type {
    IconButtonType,
    IconButtonTheme,
    IconButtonSize
} from './app/library/components/buttons/icon-button/icon-button.component';

// Services
export { provideIcons, initializeIcons } from './app/library/services/icons-initializer';
