import { Component, inject, model } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
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
import { DeviceCategory } from '../../../../../../interfaces/device-category.interface';
import { ErrorStateMatcher } from '@angular/material/core';
import { CommonModule } from '@angular/common';

export interface ICreateDeviceForm {
  partNumber: string;
  color: string;
  categoryId: number;
}

export interface DialogData {
  form: ICreateDeviceForm;
  categoryOptions: DeviceCategory[];
}

/** Error when invalid control is dirty, touched, or submitted. */

@Component({
  selector: 'app-create-device-dialog',
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
  templateUrl: './create-device-dialog.component.html',
  styleUrl: './create-device-dialog.component.scss',
})
export class CreateDeviceDialogComponent {
  readonly dialogRef = inject(MatDialogRef<CreateDeviceDialogComponent>);
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);

  onNoClick(): void {
    this.dialogRef.close();
  }

  formValidator = new FormGroup({
    color: new FormControl('', [Validators.required]),
    partNumber: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]*$'),
    ]),
    category: new FormControl('', [Validators.required]),
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
