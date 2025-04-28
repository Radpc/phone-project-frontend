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
import { DeviceCategoriesService } from '../../../../../services/device-categories/device-categories.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';

export interface DialogData {
  deviceCategory: DeviceCategory;
}

@Component({
  selector: 'app-delete-device-category-dialog',
  standalone: true,
  imports: [
    MatDialogActions,
    MatDialogContent,
    MatDialogTitle,
    MatButtonModule,
    CommonModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './delete-device-category-dialog.component.html',
  styleUrl: './delete-device-category-dialog.component.scss',
})
export class DeleteDeviceCategoryDialogComponent {
  readonly deviceCategoryService = inject(DeviceCategoriesService);
  readonly dialogRef = inject(
    MatDialogRef<DeleteDeviceCategoryDialogComponent>
  );
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);
  loading = false;

  onCloseClick(): void {
    this.dialogRef.close();
  }

  onConfirmClick(): void {
    this.loading = true;
    this.deviceCategoryService.delete(this.data.deviceCategory.id).subscribe({
      next: () => {
        this.dialogRef.close(true);
      },
      complete: () => {
        this.loading = false;
      },
    });
  }

  formatDate(str: string) {
    return formatISODate(str, true);
  }
}
