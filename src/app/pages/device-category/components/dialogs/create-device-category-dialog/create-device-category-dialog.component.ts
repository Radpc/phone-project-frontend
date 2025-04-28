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

export interface ICreateDeviceCategoryForm {
  categoryName: string;
}

export interface DialogData {
  form: ICreateDeviceCategoryForm;
}

@Component({
  selector: 'app-create-device-category-dialog',
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
  templateUrl: './create-device-category-dialog.component.html',
  styleUrl: './create-device-category-dialog.component.scss',
})
export class CreateDeviceCategoryDialogComponent {
  deviceCategoryService = inject(DeviceCategoriesService);

  readonly dialogRef = inject(
    MatDialogRef<CreateDeviceCategoryDialogComponent>
  );
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);
  loading = false;

  formValidator = new FormGroup({
    name: new FormControl('', [Validators.required]),
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

  async createCategory() {
    this.loading = true;
    const formValues = this.formValidator.value;
    return this.deviceCategoryService
      .create({ name: formValues.name! })
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
      this.createCategory();
    } else {
      this.formValidator.markAllAsTouched();
    }
  }
}
