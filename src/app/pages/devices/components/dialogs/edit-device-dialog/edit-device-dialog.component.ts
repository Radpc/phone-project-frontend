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
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DevicesService } from '../../../../../services/devices/devices.service';
import { Device } from '../../../../../../interfaces/device.interface';

export interface EditDeviceDialogData {
  device: Device;
  categoryOptions: DeviceCategory[];
}

/** Error when invalid control is dirty, touched, or submitted. */

@Component({
  selector: 'app-edit-device-dialog',
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
    MatSelectModule,
  ],
  templateUrl: './edit-device-dialog.component.html',
  styleUrl: './edit-device-dialog.component.scss',
})
export class EditDeviceDialogComponent {
  deviceService = inject(DevicesService);

  readonly dialogRef = inject(MatDialogRef<EditDeviceDialogComponent>);
  readonly data = inject<EditDeviceDialogData>(MAT_DIALOG_DATA);
  loading = false;

  onNoClick(): void {
    this.dialogRef.close();
  }

  formValidator = new FormGroup({
    color: new FormControl(this.data.device.color, [
      Validators.required,
      Validators.pattern('^[a-zA-Z ]*$'),
    ]),
    partNumber: new FormControl(this.data.device.partNumber.toString(), [
      Validators.required,
      Validators.pattern('^[0-9]*$'),
    ]),
    category: new FormControl(this.data.device.category?.id, [
      Validators.required,
    ]),
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

  async createDevice() {
    this.loading = true;
    const formValues = this.formValidator.value;
    return this.deviceService
      .update(this.data.device.id, {
        color: formValues.color!,
        categoryId: +formValues.category!,
        partNumber: Number(formValues.partNumber!),
      })
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
      this.createDevice();
    } else {
      this.formValidator.markAllAsTouched();
    }
  }
}
