import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { sidebarItems } from '../../../config/sidebar-items';

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.scss',
})
export class AuthLayoutComponent {
  sidebarItems = sidebarItems;
}
