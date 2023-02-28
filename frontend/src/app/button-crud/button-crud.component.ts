import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-crud',
  templateUrl: './button-crud.component.html',
  styleUrls: ['./button-crud.component.css'],
})
export class ButtonCrudComponent implements OnInit {
  @Output() create = new EventEmitter();
  @Output() read = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  btnCreate() {
    this.create.emit();
  }
  btnRead() {
    this.read.emit();
  }
}
