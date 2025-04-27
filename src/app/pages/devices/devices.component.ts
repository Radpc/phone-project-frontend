import { Component, inject } from '@angular/core';
import { DevicesService } from '../../services/devices/devices.service';

@Component({
  selector: 'app-devices',
  standalone: true,
  imports: [],
  templateUrl: './devices.component.html',
  styleUrl: './devices.component.scss',
})
export class DevicesComponent {
  devicesService = inject(DevicesService);

  constructor() {
    this.devicesService.getList().subscribe();
  }
}
