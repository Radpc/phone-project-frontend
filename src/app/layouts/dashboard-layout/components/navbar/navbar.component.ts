import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Route, Router } from '@angular/router';
import { StorageService } from '../../../../services/storage/storage.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  storageService = inject(StorageService);

  constructor(private route: Router) {}

  logout() {
    this.storageService.clear();
    this.route.navigateByUrl('/');
  }
}
