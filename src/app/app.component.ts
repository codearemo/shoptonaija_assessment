import { Component } from '@angular/core';
import { SidebarComponent } from "./core/ui/sidebar/sidebar.component";
import { HeaderComponent } from "./core/ui/header/header.component";
import { DashboardComponent } from "./modules/dashboard/dashboard.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [SidebarComponent, HeaderComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isMinimized = false;

  toggleSidebar() {
    this.isMinimized = !this.isMinimized;
  }
}
