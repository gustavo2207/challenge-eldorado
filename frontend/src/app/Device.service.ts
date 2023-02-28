import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Device } from './Device';

@Injectable({ providedIn: 'root' })
export class DeviceService {
  /* private url = 'http://52.67.132.193:3333'; */
  private url = 'http://localhost:3333';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  getDevices(): Observable<Device[]> {
    return this.http.get<Device[]>(`${this.url}/category/device`).pipe(
      tap((_) => this.log('fetched Devices')),
      catchError(this.handleError<Device[]>('getDevices', []))
    );
  }

  addDevice(device: Device, name: String): Observable<Device> {
    return this.http
      .post<Device>(
        `${this.url}/category/${name}/device`,
        device,
        this.httpOptions
      )
      .pipe(
        tap((newDevice: Device) =>
          this.log(`added category part number: ${newDevice.part_number}`)
        ),
        catchError(this.handleError<Device>('addDevice'))
      );
  }

  deleteDevice(partNumber: String): Observable<Device> {
    const urlDelete = `${this.url}/device/${partNumber}`;
    return this.http.delete<Device>(urlDelete, this.httpOptions).pipe(
      tap((_) => this.log(`deleted device part number = ${partNumber}`)),
      catchError(this.handleError<Device>('deleteDevice'))
    );
  }

  /**
   * @param operation
   * @param result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  private log(message: string) {}
}
