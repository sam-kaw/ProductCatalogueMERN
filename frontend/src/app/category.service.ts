import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http.get(`${this.uri}/categories`);
  }

  getCategoryById(id) {
    return this.http.get(`${this.uri}/categories/${id}`);
  }

  addCategory(name) {
    const category = {
      name: name
    };
    return this.http.post(`${this.uri}/categories/add`, category);
  }

  updateCategory(id, name) {
    const category = {
      name: name
    };
    return this.http.post(`${this.uri}/categories/update/${id}`, category);
  }

  searchrCategory(id, name) {
    const category = {
      name: name
    };
    return this.http.post(`${this.uri}/categories/search/${id}`, category);
  }
}
