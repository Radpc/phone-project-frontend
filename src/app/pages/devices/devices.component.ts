import { Component, inject, model, signal } from '@angular/core';
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
import { CreateDeviceDialogComponent } from './components/dialogs/create-device-dialog/create-device-dialog.component';

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
  ],
  templateUrl: './devices.component.html',
  styleUrl: './devices.component.scss',
})
export class DevicesComponent {
  devicesService = inject(DevicesService);

  // Create device
  readonly dialog = inject(MatDialog);

  // Table
  displayedColumns: string[] = ['id', 'color', 'partNumber'];
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
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      if (result !== undefined) {
        console.log(result);
      }
    });
  }

  constructor() {
    this.getList({ page: this.currentPage, pageSize: this.pageSize });
  }
}
