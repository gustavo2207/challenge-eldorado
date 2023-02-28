import { Component, Input, OnInit } from '@angular/core';
import { timeout } from 'rxjs';
import { Category } from '../Category';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-read',
  templateUrl: './category-read.component.html',
  styleUrls: ['./category-read.component.css'],
})
export class CategoryReadComponent implements OnInit {
  @Input() update!: Boolean;

  categories: Category[] = [];

  constructor(private categoryServices: CategoryService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  ngDoCheck() {
    if (this.update) {
      console.log(this.update);
      this.getCategories();
    }
  }

  getCategories(): void {
    this.categoryServices
      .getCategories()
      .subscribe((categories) => (this.categories = categories));
  }

  delete(name: String): void {
    name = name.trim();
    this.categoryServices.deleteCategory(name).subscribe();
    setTimeout(() => {
      this.getCategories();
    }, 200);
  }
}
