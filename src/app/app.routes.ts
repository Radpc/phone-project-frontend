import { Routes } from '@angular/router';
import { LayoutComponent } from './layouts/dashboard-layout/layout-dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { DevicesComponent } from './pages/devices/devices.component';
import { DeviceCategoryComponent } from './pages/device-category/device-category.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [{ path: '', component: LoginComponent }],
  },
  {
    path: 'dashboard',
    component: LayoutComponent,
    children: [
      { path: 'device', component: DevicesComponent },
      { path: 'category', component: DeviceCategoryComponent },
    ],
  },
];
