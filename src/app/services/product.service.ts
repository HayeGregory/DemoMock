import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly _productEndPoint: string = environment.api + '/products';

  constructor(private _httpClient: HttpClient) {}

  // crud

  get(): Observable<Product[]> {
    return this._httpClient.get<Product[]>(this._productEndPoint);
  }

  getById(id: number): Observable<Product> {
    return this._httpClient.get<Product>(this._productEndPoint + '/' + id);
  }

  add(produit: Product): Observable<void> {
    return this._httpClient.post<void>(this._productEndPoint, produit);
  }

  delete(id: number): Observable<void> {
    return this._httpClient.delete<void>(this._productEndPoint + '/' + id);
  }

  update(id: number, produit: Product): Observable<void> {
    return this._httpClient.put<void>(
      this._productEndPoint + '/' + id,
      produit
    );
  }
}
