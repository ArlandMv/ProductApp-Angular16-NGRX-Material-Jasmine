import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbtn',
  templateUrl: './navbtn.component.html',
  styles: [],
})
export class NavbtnComponent {
  @Input() route!: string;

  constructor(private router: Router) {}

  navigate() {
    if (this.route) {
      this.router.navigate([this.route]);
    }
  }
}
