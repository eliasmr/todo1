import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TipoProductoService {

  private baseUrl = 'http://localhost:8080/api/';

  constructor(private http:HttpClient) { }

  getTipoProductoList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`+'listTipoProducto');
  }

  createTipoProducto(tipoProducto: object): Observable<object> {
    return this.http.post(`${this.baseUrl}`+'saveTipoProducto', tipoProducto);
  }
  updateTipoProducto(tipoProducto: object): Observable<object> {
    return this.http.post(`${this.baseUrl}`+'updateTipoProducto', tipoProducto);
  }
  deleteTipoProducto(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete-tipoproducto/${id}`, { responseType: 'text' });
  }

  getTipoProducto(id :number): Observable<any> {
    return this.http.get(`${this.baseUrl}buscaTipoProductoById/${id}`,{ responseType: 'json' });
  }
  
}                                           