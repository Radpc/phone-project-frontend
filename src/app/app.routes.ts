import { Routes } from '@angular/router';
import { LayoutComponent } from './layout-template/layout/layout.component';
import { HomeComponent } from './layout-template/home/home.component';
import { ContactComponent } from './layout-template/contact/contact.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      //   { path: '/', component: HomeComponent },
      { path: 'contato', component: ContactComponent },
    ],
  },
];
