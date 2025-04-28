import { Component, inject, model } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { DeviceCategoriesService } from '../../../../../services/device-categories/device-categories.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DeviceCategory } from '../../../../../../interfaces/device-category.interface';

export interface DialogData {
  deviceCategory: DeviceCategory;
}

@Component({
  selector: 'app-edit-device-category-dialog',
  standalone: true,
  imports: [
    MatInputModule,
    MatDialogActions,
    MatDialogContent,
    MatDialogTitle,
    MatButtonModule,
    MatFormField,
    MatLabel,
    ReactiveFormsModule,
    CommonModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './edit-device-category-dialog.component.html',
  styleUrl: './edit-device-category-dialog.component.scss',
})
export class EditDeviceCategoryDialogComponent {
  deviceCategoryService = inject(DeviceCategoriesService);

  readonly dialogRef = inject(MatDialogRef<EditDeviceCategoryDialogComponent>);
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);
  loading = false;

  formValidator = new FormGroup({
    name: new FormControl(this.data.deviceCategory.name, [Validators.required]),
  });

  onNoClick(): void {
    this.dialogRef.close();
  }

  isInvalid(field: keyof typeof this.formValidator.controls) {
    return !!this.formValidator.controls[field].errors;
  }

  getFieldError(field: keyof typeof this.formValidator.controls) {
    const errors = this.formValidator.controls[field].errors;
    if (errors?.['required']) return 'Required field';
    if (errors?.['pattern']) return 'Invalid field';
    return;
  }

  async updateCategory() {
    this.loading = true;
    const formValues = this.formValidator.value;
    return this.deviceCategoryService
      .update(this.data.deviceCategory.id, { name: formValues.name! })
      .subscribe({
        complete: () => {
          this.loading = false;
        },
        next: () => {
          this.dialogRef.close(true);
        },
      });
  }

  async submit() {
    if (this.formValidator.valid) {
      this.updateCategory();
    } else {
      this.formValidator.markAllAsTouched();
    }
  }
}
