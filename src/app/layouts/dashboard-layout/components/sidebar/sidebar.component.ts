import { Component, inject, Input, OnInit } from '@angular/core';
import { ISidebarItem } from './sidebar-item.interface';
import { ActivatedRoute, EventType, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent implements OnInit {
  private route = inject(Router);
  currentUrl = '';

  @Input() itemsList!: ISidebarItem[];

  ngOnInit(): void {
    this.route.events
      .pipe(filter((event) => event.type === EventType.NavigationEnd))
      .subscribe((ev: any) => {
        this.currentUrl = ev.urlAfterRedirects;
      });

    this.currentUrl = this.route.url;
  }
}
