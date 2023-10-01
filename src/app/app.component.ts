import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    `
      :host {
        height: 100vh;
      }
      app-navbar {
        flex-shrink: 0;
      }
      router-outlet {
        flex-grow: 1;
      }
    `,
  ],
})
export class AppComponent {
  title = 'ProductApp-Angular16-NGRX-Material-Jasmine';
}
