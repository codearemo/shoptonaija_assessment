import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AppButtonComponent } from "../app-button/app-button.component";

@Component({
  selector: 'app-shopping-list',
  imports: [AppButtonComponent],
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShoppingListComponent { }
