import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CustomInputComponent } from "../../../../core/ui/app-input/app-input.component";
import { AppButtonComponent } from "../../../../core/ui/app-button/app-button.component";

@Component({
  selector: 'app-password-settings',
  imports: [CustomInputComponent, AppButtonComponent],
  templateUrl: './password-settings.component.html',
  styleUrl: './password-settings.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PasswordSettingsComponent { }
