import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-top-addresses',
  imports: [CommonModule],
  templateUrl: './top-addresses.component.html',
  styleUrl: './top-addresses.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopAddressesComponent { 
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

