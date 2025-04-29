import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import {
  SuccessPaginatedResponse,
  SuccessResponse,
} from '../../../utils/api-responses/success-response.interface';
import { DeviceCategory } from '../../../interfaces/device-category.interface';
import { StorageService } from '../storage/storage.service';

export interface ICreateDeviceCategory {
  name: string;
}

export type IUpdateDeviceCategory = Partial<ICreateDeviceCategory>;
@Injectable({
  providedIn: 'root',
})
export class DeviceCategoriesService {
  apiBase = environment.baseAPIPath;
  storageService = inject(StorageService);

  constructor(private http: HttpClient) {}

  private getHeader(): {
    [header: string]: string | string[];
  } {
    const token = this.storageService.get('access-token');
    if (token) {
      return { authorization: 'Bearer ' + token };
    } else {
      return {};
    }
  }

  getList(params: {
    page: number;
    pageSize: number;
  }): Observable<SuccessPaginatedResponse<DeviceCategory>> {
    const requestParams = new HttpParams({ fromObject: params });

    return this.http.get<SuccessPaginatedResponse<DeviceCategory>>(
      this.apiBase + 'device-categories',
      { params: requestParams, headers: this.getHeader() }
    );
  }

  create(
    data: ICreateDeviceCategory
  ): Observable<SuccessResponse<DeviceCategory>> {
    return this.http.post<SuccessResponse<DeviceCategory>>(
      this.apiBase + 'device-categories',
      data,
      { headers: this.getHeader() }
    );
  }

  update(
    deviceCategoryId: number,
    data: IUpdateDeviceCategory
  ): Observable<SuccessResponse<DeviceCategory>> {
    return this.http.patch<SuccessResponse<DeviceCategory>>(
      this.apiBase + 'device-categories/' + deviceCategoryId,
      data,
      { headers: this.getHeader() }
    );
  }

  delete(
    deviceCategoryId: number
  ): Observable<SuccessResponse<DeviceCategory>> {
    return this.http.delete<SuccessResponse<DeviceCategory>>(
      this.apiBase + 'device-categories/' + deviceCategoryId,
      { headers: this.getHeader() }
    );
  }
}
