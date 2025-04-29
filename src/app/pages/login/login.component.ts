import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '../../services/auth/auth.service';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { StorageService } from '../../services/storage/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormField,
    MatLabel,
    MatButtonModule,
    ReactiveFormsModule,
    CommonModule,
    MatCardModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  authService = inject(AuthService);
  storage = inject(StorageService);
  loading = false;

  constructor(private router: Router) {}

  formValidator = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  isInvalid(field: keyof typeof this.formValidator.controls) {
    return !!this.formValidator.controls[field].errors;
  }
  getFieldError(field: keyof typeof this.formValidator.controls) {
    const errors = this.formValidator.controls[field].errors;
    if (errors?.['required']) return 'Required field';
    if (errors?.['pattern']) return 'Invalid field';
    if (errors?.['email']) return 'Invalid field';
    return;
  }

  async onSubmitLogin() {
    if (this.formValidator.valid) {
      this.authService
        .login(
          this.formValidator.value.email || '',
          this.formValidator.value.password || ''
        )
        .subscribe({
          next: (res) => {
            this.storage.set('access-token', res.access_token);
            this.router.navigateByUrl('dashboard/device');
          },
        });
    } else {
      this.formValidator.markAllAsTouched();
    }
  }
}
