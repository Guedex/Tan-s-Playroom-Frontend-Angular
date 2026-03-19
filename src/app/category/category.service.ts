import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Category } from './model/Category';
import { CATEGORY_DATA } from './model/mock-categories';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
/**
 * Service responsible for category CRUD operations against backend API.
 */
export class CategoryService {

  constructor(
    private http: HttpClient
) { }

  /**
   * Retrieves all categories.
   * @returns Observable list of categories.
   */
  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>('http://localhost:8080/category');
}

  /**
   * Creates or updates a category.
   * @param category Category entity to persist.
   * @returns Persisted category response.
   */
  saveCategory(category: Category): Observable<Category> {
    let url = 'http://localhost:8080/category';
        if (category.id != null) url += '/'+category.id;

        return this.http.put<Category>(url, category);
  }

  /**
   * Deletes a category by identifier.
   * @param idCategory Category id.
   * @returns Completion observable.
   */
  deleteCategory(idCategory : number): Observable<any> {
    return this.http.delete('http://localhost:8080/category/'+idCategory);
} 
}