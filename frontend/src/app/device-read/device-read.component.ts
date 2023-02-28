import { Component, Input, OnInit } from '@angular/core';
import { Device } from '../Device';
import { DeviceService } from '../Device.service';

@Component({
  selector: 'app-device-read',
  templateUrl: './device-read.component.html',
  styleUrls: ['./device-read.component.css'],
})
export class DeviceReadComponent implements OnInit {
  @Input() update!: Boolean;

  devices: Device[] = [];

  constructor(private deviceService: DeviceService) {}

  ngOnInit(): void {
    this.getDevices();
  }

  ngDoCheck() {
    if (this.update) {
      this.getDevices();
    }
  }

  getDevices(): void {
    this.deviceService
      .getDevices()
      .subscribe((devices) => (this.devices = devices));
  }

  delete(partNumber: string): void {
    partNumber = `${partNumber}`.trim();
    this.deviceService.deleteDevice(partNumber).subscribe();
    setTimeout(() => {
      this.getDevices();
    }, 200);
  }
}
