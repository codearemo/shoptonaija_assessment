import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProfileManagementComponent } from "./profile-management/profile-management.component";

@Component({
  selector: 'app-settings',
  imports: [CommonModule, ProfileManagementComponent],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsComponent {
  tabs = ['Profile Management', 'Know Your Customer (KYC)', 'Security'];
  selectedTabIndex = 0;

  selectTab(index: number): void {
    this.selectedTabIndex = index;
  }
}
