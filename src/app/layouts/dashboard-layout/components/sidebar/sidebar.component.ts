import { Component, Input } from '@angular/core';
import { ISidebarItem } from './sidebar-item.interface';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  @Input() itemsList!: ISidebarItem[];
}
