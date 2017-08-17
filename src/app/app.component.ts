/**
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { AppState } from './app.service';

/**
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./app.component.scss')],
  templateUrl: './app.component.html'
})

export class AppComponent {

  constructor() {
    // All implementation on the start should be added here
  }
}
