import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceReadComponent } from './device-read.component';

describe('DeviceReadComponent', () => {
  let component: DeviceReadComponent;
  let fixture: ComponentFixture<DeviceReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
