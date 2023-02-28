import { animate, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-device-management',
  templateUrl: './device-management.component.html',
  styleUrls: ['./device-management.component.css'],
  animations: [
    trigger('openClosed', [
      transition(':enter', [
        style({
          position: 'absolute',
          top: 0,
          left: '-10%',
          width: '100%',
        }),
        animate('200ms ease-in-out', style({ opacity: 1, left: 0 })),
      ]),
      transition(':leave', [animate('200ms ease-out', style({ opacity: 0 }))]),
    ]),
  ],
})
export class DeviceManagementComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
