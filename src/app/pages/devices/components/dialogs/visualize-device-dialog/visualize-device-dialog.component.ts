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
import { Device } from '../../../../../../interfaces/device.interface';

export interface DialogData {
  device: Device;
}

@Component({
  selector: 'app-visualize-device-dialog',
  standalone: true,
  imports: [
    MatDialogActions,
    MatDialogContent,
    MatDialogTitle,
    MatButtonModule,
  ],
  templateUrl: './visualize-device-dialog.component.html',
  styleUrl: './visualize-device-dialog.component.scss',
})
export class VisualizeDeviceDialogComponent {
  readonly dialogRef = inject(MatDialogRef<VisualizeDeviceDialogComponent>);
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);

  onCloseClick(): void {
    this.dialogRef.close();
  }

  formatDate(str: string) {
    return formatISODate(str, true);
  }
}
