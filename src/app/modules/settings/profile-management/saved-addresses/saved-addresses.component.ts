import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-saved-addresses',
  imports: [CommonModule],
  templateUrl: './saved-addresses.component.html',
  styleUrl: './saved-addresses.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SavedAddressesComponent {
  addresses = [
    {
      name: 'Atlanta Warehouse',
      details:
        '3770 Zip Industrial Blvd SE suite d, Atlanta, GA 30354, USA.',
    },
    {
      name: 'Atlanta Warehouse',
      details:
        '3770 Zip Industrial Blvd SE suite d, Atlanta, GA 30354, USA.',
    },
    {
      name: 'Atlanta Warehouse',
      details:
        '3770 Zip Industrial Blvd SE suite d, Atlanta, GA 30354, USA.',
    },
    {
      name: 'Atlanta Warehouse',
      details:
        '3770 Zip Industrial Blvd SE suite d, Atlanta, GA 30354, USA.',
    },
  ];
}
