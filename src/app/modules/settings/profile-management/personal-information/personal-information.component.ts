import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CustomInputComponent } from "../../../../core/ui/app-input/app-input.component";
import { AppButtonComponent } from "../../../../core/ui/app-button/app-button.component";

@Component({
  selector: 'app-personal-information',
  imports: [CustomInputComponent, AppButtonComponent],
  templateUrl: './personal-information.component.html',
  styleUrl: './personal-information.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonalInformationComponent { }
