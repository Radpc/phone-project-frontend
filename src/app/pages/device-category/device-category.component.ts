import { Component, inject } from '@angular/core';
import { DeviceCategory } from '../../../interfaces/device-category.interface';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { DeviceCategoriesService } from '../../services/device-categories/device-categories.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { CreateDeviceCategoryDialogComponent } from './components/dialogs/create-device-category-dialog/create-device-category-dialog.component';
import { formatISODate } from '../../../utils/date-formatter';
import { MatTooltipModule } from '@angular/material/tooltip';
import { VisualizeDeviceCategoryDialogComponent } from './components/dialogs/visualize-device-category-dialog/visualize-device-category-dialog.component';
import { MatFormField, MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { DeleteDeviceCategoryDialogComponent } from './components/dialogs/delete-device-category-dialog/delete-device-category-dialog.component';
import { EditDeviceCategoryDialogComponent } from './components/dialogs/edit-device-category-dialog/edit-device-category-dialog.component';

@Component({
  selector: 'app-device-category',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatDividerModule,
    MatInputModule,
    MatFormField,
  ],
  templateUrl: './device-category.component.html',
  styleUrl: './device-category.component.scss',
})
export class DeviceCategoryComponent {
  readonly deviceCategoryService = inject(DeviceCategoriesService);
  readonly dialog = inject(MatDialog);

  // Table
  displayedColumns: string[] = ['id', 'name', 'createdAt', 'actions'];
  dataSource: DeviceCategory[] = [];
  currentPage = 1;
  pageSize = 10;
  totalItems = 0;
  loadingTable = false;

  formatDate(str: string) {
    return formatISODate(str);
  }

  onSelectPage(event: PageEvent) {
    this.currentPage = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.getList({ page: this.currentPage, pageSize: this.pageSize });
  }

  getList(options: { page: number; pageSize: number }) {
    this.loadingTable = true;
    this.deviceCategoryService
      .getList({ page: options.page, pageSize: options.pageSize })
      .subscribe((v) => {
        this.dataSource = v.data.items;
        this.totalItems = v.data.total;
        this.loadingTable = false;
      });
  }

  openCreateDialog(): void {
    const dialogRef = this.dialog.open(CreateDeviceCategoryDialogComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.getList({ page: this.currentPage, pageSize: this.pageSize });
      }
    });
  }

  openDetailsDialog(deviceCategory: DeviceCategory): void {
    this.dialog.open(VisualizeDeviceCategoryDialogComponent, {
      width: '400px',
      data: { deviceCategory },
    });
  }

  openeDeleteDialog(deviceCategory: DeviceCategory): void {
    const dialogRef = this.dialog.open(DeleteDeviceCategoryDialogComponent, {
      width: '400px',
      data: { deviceCategory },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.getList({ page: this.currentPage, pageSize: this.pageSize });
      }
    });
  }

  openEditDialog(deviceCategory: DeviceCategory): void {
    const dialogRef = this.dialog.open(EditDeviceCategoryDialogComponent, {
      width: '400px',
      data: { deviceCategory },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.getList({ page: this.currentPage, pageSize: this.pageSize });
      }
    });
  }

  constructor() {
    this.getList({ page: this.currentPage, pageSize: this.pageSize });
  }
}
