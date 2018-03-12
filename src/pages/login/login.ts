import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { Usuario } from '../../model/Usuario';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public username : string;
  public clave : string;
  public mensaje : string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private userService : UserServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  ingreso(){
    let  usuario : Usuario = new Usuario();
    usuario.nombre = this.username;
    usuario.clave = this.clave;    
    let usuarioValido = this.userService.validaUsuario(usuario);
    usuarioValido.subscribe((datos : Usuario[]) => {
      for(let u of datos){
        if(u.nombre === this.username && u.clave === this.clave){
          this.navCtrl.push( HomePage);
          return;
        }
      }
      this.mensaje = "usuario invalido";
    });

    
  }
}
