import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CustomInputComponent } from "../app-input/app-input.component";
import { AppButtonComponent } from "../app-button/app-button.component";

@Component({
  selector: 'app-header',
  imports: [CustomInputComponent, AppButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent { 
  @Input() isMinimized?: boolean;
}
