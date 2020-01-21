import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductoService {

  private baseUrl = 'http://localhost:8080/api/';

  constructor(private http:HttpClient) { }

  getProductoList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`+'listaProducto');
  }

  createProducto(producto: object): Observable<object> {
    return this.http.post(`${this.baseUrl}`+'saveProducto', producto);
  }

  deleteProducto(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete-producto/${id}`, { responseType: 'text' });
  }

  getProducto(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/producto/${id}`);
  }

  updateProducto(id: number, value: any): Observable<Object> {
    return this.http.post(`${this.baseUrl}/update-producto/${id}`, value);
  }
  
}                                           