import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Category } from './Category';

@Injectable({ providedIn: 'root' })
export class CategoryService {
  /* private url = 'http://52.67.132.193:3333'; */
  private url = 'http://localhost:3333';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.url}/category`).pipe(
      tap((_) => this.log('fetched Categories')),
      catchError(this.handleError<Category[]>('getCategories', []))
    );
  }

  addCategory(category: Category): Observable<Category> {
    return this.http
      .post<Category>(`${this.url}/category`, category, this.httpOptions)
      .pipe(
        tap((newCategory: Category) =>
          this.log(`added category name: ${newCategory.name}`)
        ),
        catchError(this.handleError<Category>('addCategory'))
      );
  }

  deleteCategory(name: String): Observable<Category> {
    const urlDelete = `${this.url}/category/${name}`;
    return this.http.delete<Category>(urlDelete, this.httpOptions).pipe(
      tap((_) => this.log(`deleted category ${name}`)),
      catchError(this.handleError<Category>('deletedCategory'))
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
