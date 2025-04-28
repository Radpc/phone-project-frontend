import { Component, inject } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { formatISODate } from '../../../../../../utils/date-formatter';
import { DeviceCategoriesService } from '../../../../../services/device-categories/device-categories.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';
import { Device } from '../../../../../../interfaces/device.interface';
import { DevicesService } from '../../../../../services/devices/devices.service';

export interface DialogData {
  device: Device;
}

@Component({
  selector: 'app-delete-device-dialog',
  standalone: true,
  imports: [
    MatDialogActions,
    MatDialogContent,
    MatDialogTitle,
    MatButtonModule,
    CommonModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './delete-device-dialog.component.html',
  styleUrl: './delete-device-dialog.component.scss',
})
export class DeleteDeviceDialogComponent {
  readonly deviceService = inject(DevicesService);
  readonly dialogRef = inject(MatDialogRef<DeleteDeviceDialogComponent>);
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);
  loading = false;

  onCloseClick(): void {
    this.dialogRef.close();
  }

  onConfirmClick(): void {
    this.loading = true;
    this.deviceService.delete(this.data.device.id).subscribe({
      next: () => {
        this.dialogRef.close(true);
      },
      complete: () => {
        this.loading = false;
      },
    });
  }
}
