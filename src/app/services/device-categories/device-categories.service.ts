import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { SuccessPaginatedResponse } from '../../../utils/api-responses/success-response.interface';
import { DeviceCategory } from '../../../interfaces/device-category.interface';

@Injectable({
  providedIn: 'root',
})
export class DeviceCategoriesService {
  apiBase = environment.baseAPIPath;

  constructor(private http: HttpClient) {}

  getList(params: {
    page: number;
    pageSize: number;
  }): Observable<SuccessPaginatedResponse<DeviceCategory>> {
    const requestParams = new HttpParams({ fromObject: params });

    return this.http.get<SuccessPaginatedResponse<DeviceCategory>>(
      this.apiBase + 'device-categories',
      { params: requestParams }
    );
  }
}
