import { Routes } from '@angular/router';
import { LayoutComponent } from './layouts/dashboard-layout/layout-dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { DevicesComponent } from './pages/devices/devices.component';
import { DeviceCategoryComponent } from './pages/device-category/device-category.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'device', component: DevicesComponent },
      { path: 'category', component: DeviceCategoryComponent },
    ],
  },
];
