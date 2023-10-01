import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
    `
      .container {
        height: auto;
      }
      section {
        margin: 10px;
        padding: 20px;
      }
    `,
  ],
})
export class HomeComponent {}
