import { Component, inject } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { DeviceCategory } from '../../../../../../interfaces/device-category.interface';
import { formatISODate } from '../../../../../../utils/date-formatter';

export interface DialogData {
  deviceCategory: DeviceCategory;
}

@Component({
  selector: 'app-visualize-device-category-dialog',
  standalone: true,
  imports: [
    MatDialogActions,
    MatDialogContent,
    MatDialogTitle,
    MatButtonModule,
  ],
  templateUrl: './visualize-device-category-dialog.component.html',
  styleUrl: './visualize-device-category-dialog.component.scss',
})
export class VisualizeDeviceCategoryDialogComponent {
  readonly dialogRef = inject(
    MatDialogRef<VisualizeDeviceCategoryDialogComponent>
  );
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);

  onCloseClick(): void {
    this.dialogRef.close();
  }

  formatDate(str: string) {
    return formatISODate(str, true);
  }
}
