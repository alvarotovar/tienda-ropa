import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomeModel } from '../../model/HomeModel';
import { BuscadorProductoDTO } from '../../dto/BuscadorProductoDTO';
import { ProductoServiceProvider } from '../../providers/producto-service/producto-service';
import { Producto } from '../../model/Producto';
import { Ropa } from '../../model/Ropa';
import { DetallaProductoPage } from '../detalla-producto/detalla-producto';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public modelo: HomeModel;

  constructor(public navCtrl: NavController, public productoProvider: ProductoServiceProvider) {
    this.modelo = new HomeModel();
    this.modelo.buscador = new BuscadorProductoDTO();
  }

  buscar() {
    let osv = this.productoProvider.buscarProductos(this.modelo.buscador);
    this.modelo.productos = [];
    osv.subscribe((datos: Producto[]) => {
      if (this.modelo.buscador.texto != null && this.modelo.buscador.texto    != '') {
        for (let d of datos) {
          if (d.nombre == this.modelo.buscador.texto) {
            this.modelo.productos.push(d);
          }
        }
      }else{
        this.modelo.productos = datos;
        console.log('datos es ' + JSON.stringify(datos));
      }
    });
  }

  detalle(p : Producto ){
    this.navCtrl.push(DetallaProductoPage, {producto : p});
  }
}
