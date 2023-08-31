import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable()
export class ThemeService {
    currentMode$ = new BehaviorSubject<string>('light');

    getThemeMode$(): Observable<string> {
        return this.currentMode$.asObservable();
    }

    setThemeMode(currentMode?: string): void {
        if (currentMode) {
            if (localStorage.getItem('theme') === null) {
                localStorage.setItem('theme', currentMode);
            } else {
                localStorage.removeItem('theme');
            }
        }

        this.currentMode$.next(localStorage.getItem('theme')!);
    }

}
