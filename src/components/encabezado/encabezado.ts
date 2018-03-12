import { Component } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';
import { CarritoComprasPage } from '../../pages/carrito-compras/carrito-compras';

/**
 * Generated class for the EncabezadoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'encabezado',
  templateUrl: 'encabezado.html'
})
export class EncabezadoComponent {

  text: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log('Hello EncabezadoComponent Component');
    this.text = 'Bienvenido alvaro andres';
  }
  verCarrito(){
    this.navCtrl.push(CarritoComprasPage);
  }
}
