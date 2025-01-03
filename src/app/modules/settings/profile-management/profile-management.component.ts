import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';
import { PasswordSettingsComponent } from './password-settings/password-settings.component';
import { SavedAddressesComponent } from './saved-addresses/saved-addresses.component';

interface Tab {
  name?: string;
  subTitle?: string;
  component?: any;
}

@Component({
  selector: 'app-profile-management',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './profile-management.component.html',
  styleUrl: './profile-management.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileManagementComponent {
  faChevronRight = faChevronRight;

  tabs: Tab[] = [
    {
      name: 'Personal Information',
      subTitle: 'Update your personal information',
      component: PersonalInformationComponent,
    },
    {
      name: 'Password Settings',
      subTitle: 'Change to a new password',
      component: PasswordSettingsComponent,
    },
    {
      name: 'Saved Addresses',
      subTitle: 'Manage saved addresses',
      component: SavedAddressesComponent,
    },
  ];

  selectedTab = this.tabs[0];

  selectTab(tab: Tab): void {
    this.selectedTab = tab;
  }
}
