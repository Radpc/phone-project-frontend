import { Component, Input } from '@angular/core';
import { ISidebarItem } from './sidebar-item.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  @Input() itemsList!: ISidebarItem[];
}
