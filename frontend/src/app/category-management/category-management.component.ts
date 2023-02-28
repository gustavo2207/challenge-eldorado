import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category-management',
  templateUrl: './category-management.component.html',
  styleUrls: ['./category-management.component.css'],
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
      transition(':leave', [
        animate('200ms ease-in-out', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class CategoryManagementComponent implements OnInit {
  @Input() isActive!: Boolean;
  @Input() showDefault!: Boolean;
  @Input() newCategory!: Boolean;

  showCreate: Boolean = false;
  showRead: Boolean = true;
  updateCategories: Boolean = false;
  isOpen!: Boolean;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}
}
