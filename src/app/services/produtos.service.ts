import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from '../../utils/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private _httpClient: HttpClient) { }

  addProduto(produtoNovo: Produto): Observable<Object> {
    return this._httpClient.post('http://localhost:3000/produtos', produtoNovo)
  }

  getProdutosList(): Observable<any> {
    return this._httpClient.get('http://localhost:3000/produtos')
  }

  deleteProduto(idProduto: string): Observable<Object> {
    return this._httpClient.delete(`http://localhost:3000/produtos/${idProduto}`)
  }

  editProduto(idProduto: string, produtoNovo: Produto): Observable<Object> {
    return this._httpClient.put(`http://localhost:3000/produtos/${idProduto}`, produtoNovo)
  }
}
