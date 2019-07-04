import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get(`${this.uri}/products`);
  }

  getProductById(id) {
    return this.http.get(`${this.uri}/products/${id}`);
  }

  addProduct(name, description, price, quantity, category) {
    const product = {
      name: name,
      description: description,
      price: price,
      quantity: quantity,
      category: category
    };
    return this.http.post(`${this.uri}/products/add`, product);
  }

  updateProduct(id, name, description, price, quantity, category) {
    const product = {
      name: name,
      description: description,
      price: price,
      quantity: quantity,
      category: category
    };
    return this.http.post(`${this.uri}/products/update/${id}`, product);
  }
}
