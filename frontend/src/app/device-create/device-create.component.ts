import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Category } from '../Category';
import { CategoryService } from '../category.service';
import { Device } from '../Device';
import { DeviceService } from '../Device.service';

@Component({
  selector: 'app-device-create',
  templateUrl: './device-create.component.html',
  styleUrls: ['./device-create.component.css'],
})
export class DeviceCreateComponent implements OnInit {
  @Output() createdUpdate = new EventEmitter();

  devices: Device[] = [];
  categories: Category[] = [];
  deviceCategory: string = '';
  partNumber: number = 0;
  color: string = '';

  constructor(
    private deviceService: DeviceService,
    private categoryServices: CategoryService
  ) {}

  ngOnInit(): void {
    this.getCategories();
  }

  add(): void {
    this.deviceCategory = this.deviceCategory.trim();
    this.color = this.color.trim();

    if (!this.deviceCategory && !this.color && !this.partNumber) return;

    this.createdUpdate.emit();

    this.deviceService
      .addDevice(
        { color: this.color, part_number: this.partNumber } as Device,
        this.deviceCategory
      )
      .subscribe({
        next: (device) => this.devices.push(device),
        error: (err) => console.error(err),
        complete: () => this.clear()
      });
  }

  clear() {
    this.deviceCategory = '';
    this.partNumber = 0;
    this.color = '';
  }

  getCategories(): void {
    this.categoryServices
      .getCategories()
      .subscribe((categories) => (this.categories = categories));
  }
}
