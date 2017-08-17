import {
  Component,
  OnInit
} from '@angular/core';
import {
  Observable,
  Subject,
  BehaviorSubject
} from 'rxjs/Rx';

@Component({
  selector: 'feature-home',
  templateUrl: './home.component.html',
  styles: [require('./home.component.scss')]
})

export class HomeComponent implements OnInit {
  ngOnInit() {
  }
}
