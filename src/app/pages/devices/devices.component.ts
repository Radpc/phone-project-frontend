import { Component, inject, model, OnInit, signal } from '@angular/core';
import { DevicesService } from '../../services/devices/devices.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { Device } from '../../../interfaces/device.interface';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import {
  CreateDeviceDialogComponent,
  CreateDeviceDialogData,
} from './components/dialogs/create-device-dialog/create-device-dialog.component';
import { DeviceCategory } from '../../../interfaces/device-category.interface';
import { DeviceCategoriesService } from '../../services/device-categories/device-categories.service';
import { CategoryTagComponent } from '../../components/category-tag/category-tag.component';
import { MatFormField, MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-devices',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    CategoryTagComponent,
    MatDividerModule,
    MatInputModule,
    MatFormField,
  ],

  templateUrl: './devices.component.html',
  styleUrl: './devices.component.scss',
})
export class DevicesComponent implements OnInit {
  devicesService = inject(DevicesService);
  deviceCategoryService = inject(DeviceCategoriesService);

  // Create device
  readonly dialog = inject(MatDialog);
  dialogCategoryOptions: DeviceCategory[] = [];

  // Table
  displayedColumns: string[] = [
    'id',
    'color',
    'partNumber',
    'category',
    'actions',
  ];
  dataSource: Device[] = [];
  currentPage = 1;
  pageSize = 10;
  totalItems = 0;
  loadingTable = false;

  onSelectPage(event: PageEvent) {
    this.currentPage = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.getList({ page: this.currentPage, pageSize: this.pageSize });
  }

  getList(options: { page: number; pageSize: number }) {
    this.loadingTable = true;
    this.devicesService
      .getList({ page: options.page, pageSize: options.pageSize })
      .subscribe((v) => {
        this.dataSource = v.data.items;
        this.totalItems = v.data.total;
        this.loadingTable = false;
      });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateDeviceDialogComponent, {
      width: '400px',
      data: {
        categoryOptions: this.dialogCategoryOptions,
      } satisfies CreateDeviceDialogData,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.getList({ page: this.currentPage, pageSize: this.pageSize });
      }
    });
  }

  ngOnInit(): void {
    this.getList({ page: this.currentPage, pageSize: this.pageSize });
    this.deviceCategoryService
      .getList({ page: 1, pageSize: 50 })
      .subscribe((res) => {
        this.dialogCategoryOptions = res.data.items;
      });
  }
}
