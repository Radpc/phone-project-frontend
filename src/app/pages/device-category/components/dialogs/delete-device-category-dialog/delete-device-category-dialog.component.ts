import { Component, inject } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { DeviceCategory } from '../../../../../../interfaces/device-category.interface';
import { formatISODate } from '../../../../../../utils/date-formatter';
import { DeviceCategoriesService } from '../../../../../services/device-categories/device-categories.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';

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
    MatSnackBarModule,
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
  categoryHasRelations = false;

  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar(message: string) {
    this._snackBar.open(message, undefined, {
      verticalPosition: 'top',
      horizontalPosition: 'end',
    });
  }

  onCloseClick(): void {
    this.dialogRef.close();
  }

  onConfirmClick(): void {
    this.loading = true;
    this.deviceCategoryService.delete(this.data.deviceCategory.id).subscribe({
      error: (err) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 400) {
            this.categoryHasRelations = true;
          }
        }
        this.loading = false;
      },
      next: () => {
        this.dialogRef.close(true);
      },
      complete: () => {
        this.loading = false;
      },
    });
  }
}
