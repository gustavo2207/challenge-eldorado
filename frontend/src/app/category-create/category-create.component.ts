import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Category } from '../Category';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css'],
})
export class CategoryCreateComponent implements OnInit {
  @Output() createUpdate = new EventEmitter();

  categories: Category[] = [];

  categoryName: string = '';

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {}

  add(): void {
    this.categoryName = this.categoryName.trim();

    if (!this.categoryName) return;

    this.createUpdate.emit();

    const name = this.categoryName;

    this.categoryService.addCategory({ name }).subscribe({
      next: (category) => this.categories.push(category),
      error: (error) => console.log(error),
      complete: () => this.clear()
    });
  }
  clear(): void {
    this.categoryName = '';
  }
}
