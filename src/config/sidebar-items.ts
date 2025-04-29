import { ISidebarItem } from '../app/layouts/dashboard-layout/components/sidebar/sidebar-item.interface';

export const sidebarItems: ISidebarItem[] = [
  {
    name: 'Home',
    url: '/',
  },
  {
    name: 'Devices',
    url: '/dashboard/device',
  },
  {
    name: 'Categories',
    url: '/dashboard/category',
  },
];
