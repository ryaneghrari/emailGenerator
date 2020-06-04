import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { environment } from '@environments/environment'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Email Generator';

  constructor(public router: Router) {
  }
}
