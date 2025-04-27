import { Component, inject } from '@angular/core';
import { DevicesService } from '../../services/devices/devices.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-devices',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './devices.component.html',
  styleUrl: './devices.component.scss',
})
export class DevicesComponent {
  devicesService = inject(DevicesService);

  constructor() {
    this.devicesService.getList().subscribe();
  }
}
