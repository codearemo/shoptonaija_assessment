import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

interface Warehouse {
  name?: string;
  address?: string;
  mapLink?: string;
}

@Component({
  selector: 'app-warehouse-selector',
  imports: [CommonModule],
  templateUrl: './warehouse-selector.component.html',
  styleUrl: './warehouse-selector.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WarehouseSelectorComponent {
  // List of warehouses
  warehouses = [
    {
      name: 'Ikeja Warehouse',
      address:
        '3770 Zip Industrial Blvd SE suite d, Atlanta, Industrial Blvd SE suite d, GA 30354, USA.',
      mapLink: 'https://www.google.com/maps?q=Ikeja+Warehouse',
    },
    {
      name: 'Lagos Warehouse',
      address:
        '123 Lagos Street, Victoria Island, Lagos, Nigeria.',
      mapLink: 'https://www.google.com/maps?q=Lagos+Warehouse',
    },
    {
      name: 'Abuja Warehouse',
      address:
        '456 Abuja Avenue, Maitama, Abuja, Nigeria.',
      mapLink: 'https://www.google.com/maps?q=Abuja+Warehouse',
    },
  ];

  // Selected warehouse
  selectedWarehouse?: Warehouse = this.warehouses[0];

  // Copy address to clipboard
  copyToClipboard(address: string) {
    navigator.clipboard.writeText(address);
    alert('Address copied to clipboard!');
  }

  // Update logic when warehouse changes
  onWarehouseChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    
    this.selectedWarehouse = this.warehouses.find(
      (warehouse) => warehouse.name === target.value
    );
  }
}
