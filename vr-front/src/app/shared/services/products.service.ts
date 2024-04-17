import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from '../interfaces/product.interface';
import { ProductPayload } from '../interfaces/payload-product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  httpClient = inject(HttpClient);

  getAll() {
    return this.httpClient.get<Product[]>('http://localhost:8080/api/v1/product');
  }

  get(id: string) {
    return this.httpClient.get<Product>(`http://localhost:8080/api/v1/product${id}`);
  }

  post(payload: ProductPayload) {
    return this.httpClient.post('http://localhost:8080/api/v1/product', payload);
  }

  put(id: string, payload: ProductPayload) {
    return this.httpClient.put(`http://localhost:8080/api/v1/product${id}`, payload);
  }

  delete(id: string) {
    return this.httpClient.delete(`http://localhost:8080/api/v1/product${id}`);
  }
}
