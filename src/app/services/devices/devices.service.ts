import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import {
  SuccessPaginatedResponse,
  SuccessResponse,
} from '../../../utils/api-responses/success-response.interface';
import { Device } from '../../../interfaces/device.interface';
import { StorageService } from '../storage/storage.service';

export interface ICreateDevice {
  color: string;
  partNumber: number;
  categoryId: number;
}

export type IUpdateDevice = Partial<ICreateDevice>;

@Injectable({
  providedIn: 'root',
})
export class DevicesService {
  storageService = inject(StorageService);
  apiBase = environment.baseAPIPath;

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

  constructor(private http: HttpClient) {}

  getList(params: {
    page: number;
    pageSize: number;
  }): Observable<SuccessPaginatedResponse<Device>> {
    const requestParams = new HttpParams({ fromObject: params });

    return this.http.get<SuccessPaginatedResponse<Device>>(
      this.apiBase + 'devices',
      { params: requestParams, headers: this.getHeader() }
    );
  }

  create(data: ICreateDevice): Observable<SuccessResponse<Device>> {
    return this.http.post<SuccessResponse<Device>>(
      this.apiBase + 'devices',
      data,
      { headers: this.getHeader() }
    );
  }

  update(
    deviceId: number,
    payload: IUpdateDevice
  ): Observable<SuccessResponse<Device>> {
    return this.http.patch<SuccessResponse<Device>>(
      this.apiBase + 'devices/' + deviceId,
      payload,
      { headers: this.getHeader() }
    );
  }

  delete(deviceId: number): Observable<SuccessResponse<Device>> {
    return this.http.delete<SuccessResponse<Device>>(
      this.apiBase + 'devices/' + deviceId,
      { headers: this.getHeader() }
    );
  }
}
