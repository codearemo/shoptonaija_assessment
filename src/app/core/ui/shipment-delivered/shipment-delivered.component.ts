import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgxEchartsDirective, provideEchartsCore } from 'ngx-echarts';
// import echarts core
import * as echarts from 'echarts/core';
// import necessary echarts components
import { BarChart } from 'echarts/charts';
import { GridComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import { PieChart } from 'echarts/charts';
import { TooltipComponent } from 'echarts/components';
import { LegendComponent } from 'echarts/components';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';

echarts.use([LegendComponent, BarChart, GridComponent, CanvasRenderer, PieChart, TooltipComponent]);

@Component({
  selector: 'app-shipment-delivered',
  templateUrl: './shipment-delivered.component.html',
  styleUrl: './shipment-delivered.component.css',
  imports: [CommonModule, NgxEchartsDirective, FontAwesomeModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    provideEchartsCore({ echarts }),
  ]
})
export class ShipmentDeliveredComponent {
  faDollarSign = faDollarSign;

  chartOptions: any;
  chartData = [
    { name: 'Afr Air Basic', value: 25, color: '#7c3aed' },
    { name: 'Afr Air Standard', value: 30, color: '#10b981' },
    { name: 'Afr Ocean Basic', value: 20, color: '#3b82f6' },
    { name: 'Afr Ocean Standard', value: 25, color: '#fbbf24' },
  ];

  ngOnInit(): void {
    this.chartOptions = {
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)',
      },
      series: [
        {
          name: 'Shipments',
          type: 'pie',
          radius: ['50%', '70%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2,
          },
          label: {
            show: false,
            position: 'center',
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '12',
              fontWeight: 'bold',
            },
          },
          labelLine: {
            show: false,
          },
          data: this.chartData.map((item) => ({
            value: item.value,
            name: item.name,
            itemStyle: { color: item.color },
          })),
        },
      ],
    };
  }
}
