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
  ],
  templateUrl: './create-device-category-dialog.component.html',
  styleUrl: './create-device-category-dialog.component.scss',
})
export class CreateDeviceCategoryDialogComponent {
  readonly dialogRef = inject(
    MatDialogRef<CreateDeviceCategoryDialogComponent>
  );
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);

  onNoClick(): void {
    this.dialogRef.close();
  }

  formValidator = new FormGroup({
    name: new FormControl('', [Validators.required]),
  });

  isInvalid(field: keyof typeof this.formValidator.controls) {
    return !!this.formValidator.controls[field].errors;
  }

  getFieldError(field: keyof typeof this.formValidator.controls) {
    const errors = this.formValidator.controls[field].errors;
    if (errors?.['required']) return 'Required field';
    if (errors?.['pattern']) return 'Invalid field';
    return;
  }

  submit() {
    if (this.formValidator.valid) {
      console.log(this.formValidator.value);
      this.dialogRef.close(this.formValidator.value);
    } else {
      this.formValidator.markAllAsTouched();
    }
  }
}
