import { Component, Input, OnInit } from '@angular/core';
import { ISidebarItem } from './sidebar-item.interface';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  constructor(private activatedRoute: ActivatedRoute) {}

  @Input() itemsList!: ISidebarItem[];
}
