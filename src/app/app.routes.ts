import { Routes } from '@angular/router';
import { LayoutComponent } from './layouts/dashboard-layout/layout-dashboard.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [{ path: '', component: HomeComponent }],
  },
];
