import { DeviceCategory } from './device-category.interface';

export interface Device {
  id: number;
  color: string;
  partNumber: number;
  category?: DeviceCategory;
  createdAt: string;
  updatedAt: string;
}
