import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPercentage } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-delivery-rate',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './delivery-rate.component.html',
  styleUrl: './delivery-rate.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeliveryRateComponent {
  faPercentage = faPercentage;

  // Heatmap data - Array of intensity levels (1 to 5)
  heatmapData = [
    1, 2, 3, 4, 5, 3, 2, 4, 5, 1, 3, 4, 5, 2, 1, 3, 4, 2, 5, 1, 4, 2, 3, 5, 1, 4
  ];

  // Legend colors for the gradient
  legendColors = ['bg-slate-100', 'bg-purple-200', 'bg-purple-400', 'bg-purple-600', 'bg-purple-800'];

  // Method to return Tailwind class based on intensity level
  getHeatmapColor(intensity: number): string {
    switch (intensity) {
      case 1:
        return 'bg-slate-100';
      case 2:
        return 'bg-purple-200';
      case 3:
        return 'bg-purple-400';
      case 4:
        return 'bg-purple-600';
      case 5:
        return 'bg-purple-800';
      default:
        return 'bg-slate-100';
    }
  }
}
