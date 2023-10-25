import { Component, OnInit } from '@angular/core';
import { ThemeService } from './shared/services/theme.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    title = 'steam-fe';
    theme: string = 'dark-theme';

    constructor(private themeService: ThemeService) { }

    ngOnInit(): void {
        this.themeService.switchTheme(this.theme);
    }

}
