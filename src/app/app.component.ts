import { Component } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'responsive-css-stuff';
  faBars = faBars;
  faFacebook = faFacebook;
  
}
