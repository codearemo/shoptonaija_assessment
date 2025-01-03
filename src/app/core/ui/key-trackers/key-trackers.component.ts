import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowUp, faArrowDown, faDollarSign, faTruck, faRightLeft, faCalendar, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-key-trackers',
  imports: [FontAwesomeModule],
  templateUrl: './key-trackers.component.html',
  styleUrl: './key-trackers.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KeyTrackersComponent {
  faArrowDown = faArrowDown;
  faArrowUp = faArrowUp;
  faDollarSign = faDollarSign;
  faTruck = faTruck;
  faRightLeft = faRightLeft;
  faCalendar = faCalendar;
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;
}
