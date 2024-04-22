import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Store } from '../interfaces/store.interface';

@Injectable({
  providedIn: 'root',
})
export class StoresService {
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<Store[]> {
    return this.httpClient.get<{ data: Store[] }>('http://localhost:8080/api/v1/store')
      .pipe(
        map(response => response.data)
      );
  }

  get(id: string): Observable<Store> {
    return this.httpClient.get<{ data: Store }>(`http://localhost:8080/api/v1/store/${id}`)
      .pipe(
        map(response => response.data)
      );
  }

  post(store : Store): Observable<any> {
    return this.httpClient.post('http://localhost:8080/api/v1/store', store);
  }

  put(id: string, store : Store): Observable<any> {
    return this.httpClient.put(`http://localhost:8080/api/v1/store/${id}`, store);
  }

  delete(id: string): Observable<any> {
    return this.httpClient.delete(`http://localhost:8080/api/v1/store/${id}`);
  }
}
