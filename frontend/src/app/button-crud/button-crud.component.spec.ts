import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonCrudComponent } from './button-crud.component';

describe('ButtonCrudComponent', () => {
  let component: ButtonCrudComponent;
  let fixture: ComponentFixture<ButtonCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
