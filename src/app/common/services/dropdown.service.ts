import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable()
export class DropdownService {
    position$ = new Subject<number>();

    getDropdownPosition$(): Observable<number> {
        return this.position$.asObservable();
    }

    setDropdownPosition(position: number): void {
        this.position$.next(position);
    }
}
