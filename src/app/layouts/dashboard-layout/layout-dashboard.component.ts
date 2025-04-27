import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { sidebarItems } from '../../../config/sidebar-items';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, SidebarComponent],
  templateUrl: './layout-dashboard.component.html',
  styleUrl: './layout-dashboard.component.scss',
})
export class LayoutComponent {
  sidebarItems = sidebarItems;
}
