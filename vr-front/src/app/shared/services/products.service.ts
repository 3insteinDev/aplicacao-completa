import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../interfaces/product.interface';
import { ProductPayload } from '../interfaces/payload-product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<Product[]> {
    return this.httpClient.get<{ data: Product[] }>('http://localhost:8080/api/v1/product')
      .pipe(
        map(response => response.data)
      );
  }

  get(id: string): Observable<Product> {
    return this.httpClient.get<{ data: Product }>(`http://localhost:8080/api/v1/product/${id}`)
      .pipe(
        map(response => response.data)
      );
  }

  post(payload: ProductPayload): Observable<any> {
    return this.httpClient.post('http://localhost:8080/api/v1/product', payload);
  }

  put(id: string, payload: ProductPayload): Observable<any> {
    return this.httpClient.put(`http://localhost:8080/api/v1/product/${id}`, payload);
  }

  delete(id: string): Observable<any> {
    return this.httpClient.delete(`http://localhost:8080/api/v1/product/${id}`);
  }
}
