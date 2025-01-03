import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCalendar, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { KeyTrackersComponent } from '../../core/ui/key-trackers/key-trackers.component';
import { ShoppingListComponent } from "../../core/ui/shopping-list/shopping-list.component";
import { DeliveryRateComponent } from "../../core/ui/delivery-rate/delivery-rate.component";
import { WarehouseSelectorComponent } from "../../core/ui/warehouse-selector/warehouse-selector.component";
import { TopAddressesComponent } from "../../core/ui/top-addresses/top-addresses.component";
import { ShipmentDeliveredComponent } from "../../core/ui/shipment-delivered/shipment-delivered.component";

@Component({
  selector: 'app-dashboard',
  imports: [FontAwesomeModule, KeyTrackersComponent, ShoppingListComponent, DeliveryRateComponent, WarehouseSelectorComponent, TopAddressesComponent, ShipmentDeliveredComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {
  faCalendar = faCalendar;
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;
}
