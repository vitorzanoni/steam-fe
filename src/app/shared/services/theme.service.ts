import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ThemeService {

    constructor() { }

    switchTheme(theme: string): void {
        const themeLink = <HTMLLinkElement>document.getElementById('app-theme');
        themeLink.href = theme + '.css'
    }
}
