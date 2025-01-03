import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './app-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class AppButtonComponent {
  @Input() variant: 'default' | 'ghost' | 'outline' | 'danger' | 'success' | 'link' = 'default';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() class: string = '';
  @Input() isFullWidth = false;
  @Input() isDisabled = false;

  get variantClass(): string {
    switch (this.variant) {
      case 'ghost':
        return `bg-transparent text-primary-600 hover:bg-primary-10 text-xs0 ${this.class}`;
      case 'outline':
        return `!rounded-2xl border border-primary-300 text-primary-600 hover:bg-primary-100 text-xs' ${this.class}`;
      case 'danger':
        return `!rounded-2xl bg-red-500 text-white hover:bg-red-600 text-xs' ${this.class}`;
      case 'success':
        return `!rounded-2xl bg-green-500 text-white hover:bg-green-600 text-xs' ${this.class}`;
      case 'link':
        return `text-blue-600 underline hover:text-blue-800 text-xs' ${this.class}`;
      default:
        return `!rounded-2xl border-none p-0 shadow-none outline-none bg-primary-500 hover:bg-primary-600 transition-all duration-100 ease-in-out cursor-pointer text-white text-xs px-4 py-2' ${this.class}`;
    }
  }

  get sizeClass(): string {
    switch (this.size) {
      case 'sm':
        return 'text-xs px-3 py-1';
      case 'lg':
        return 'text-lg px-6 py-3';
      default:
        return 'text-md px-4 py-2';
    }
  }
}

