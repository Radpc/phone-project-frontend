import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { SuccessPaginatedResponse } from '../../../utils/api-responses/success-response.interface';
import { Device } from '../../../interfaces/device.interface';

@Injectable({
  providedIn: 'root',
})
export class DevicesService {
  apiBase = environment.baseAPIPath;

  constructor(private http: HttpClient) {}

  getList(): Observable<SuccessPaginatedResponse<Device>> {
    return this.http.get<SuccessPaginatedResponse<Device>>(
      this.apiBase + 'devices'
    );
  }
}
