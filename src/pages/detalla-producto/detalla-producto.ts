import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Producto } from '../../model/Producto';

/**
 * Generated class for the DetallaProductoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalla-producto',
  templateUrl: 'detalla-producto.html',
})
export class DetallaProductoPage {

  producto : Producto;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.producto = navParams.get('producto');

  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetallaProductoPage');
  }

}
