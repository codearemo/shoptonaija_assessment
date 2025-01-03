import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTruck, faTableColumns, faCartFlatbed, faChartBar, faBell, faGear, faChevronLeft, faUserCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, FontAwesomeModule, RouterLink, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  @Input() isMinimized?: boolean;
  @Output() sidebarToggled = new EventEmitter<boolean>();

  faTruck = faTruck;
  faTableColumns = faTableColumns;
  faCartFlatbed = faCartFlatbed;
  faChartBar = faChartBar;
  faBell = faBell;
  faGear = faGear;
  faChevronLeft = faChevronLeft;
  faUserCircle = faUserCircle;

  toggleSidebar() {
    this.sidebarToggled.emit(this.isMinimized);
  }
}
