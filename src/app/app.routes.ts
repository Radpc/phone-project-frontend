import { Routes } from '@angular/router';
import { LayoutComponent } from './layout-template/layout/layout.component';
import { HomeComponent } from './layout-template/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [{ path: '', component: HomeComponent }],
  },
];
