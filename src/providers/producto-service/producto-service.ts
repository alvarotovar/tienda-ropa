import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BuscadorProductoDTO } from '../../dto/BuscadorProductoDTO';
import { CategoriasProductos } from '../../constantes/CategoriasProductosEnum';

/*
  Generated class for the ProductoServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductoServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ProductoServiceProvider Provider');
  }

  public buscarProductos(filtroDTO : BuscadorProductoDTO){
    if(filtroDTO.categoiaSeleccionada == CategoriasProductos.ROPA){
      return this.http.get('assets/json/ropa.json');
    }
    return this.http.get('assets/json/ropa.json');
  }
}
