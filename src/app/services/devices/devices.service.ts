import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import {
  SuccessPaginatedResponse,
  SuccessResponse,
} from '../../../utils/api-responses/success-response.interface';
import { Device } from '../../../interfaces/device.interface';

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
  apiBase = environment.baseAPIPath;

  constructor(private http: HttpClient) {}

  getList(params: {
    page: number;
    pageSize: number;
  }): Observable<SuccessPaginatedResponse<Device>> {
    const requestParams = new HttpParams({ fromObject: params });

    return this.http.get<SuccessPaginatedResponse<Device>>(
      this.apiBase + 'devices',
      { params: requestParams }
    );
  }

  create(data: ICreateDevice): Observable<SuccessResponse<Device>> {
    return this.http.post<SuccessResponse<Device>>(
      this.apiBase + 'devices',
      data
    );
  }

  update(
    deviceId: number,
    payload: IUpdateDevice
  ): Observable<SuccessResponse<Device>> {
    return this.http.patch<SuccessResponse<Device>>(
      this.apiBase + 'devices/' + deviceId,
      payload
    );
  }

  delete(deviceId: number): Observable<SuccessResponse<Device>> {
    return this.http.delete<SuccessResponse<Device>>(
      this.apiBase + 'devices/' + deviceId
    );
  }
}
