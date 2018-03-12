import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../../model/Usuario';

/*
  Generated class for the UserServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserServiceProvider {

  
  constructor(public http: HttpClient) {
    
    console.log('Hello UserServiceProvider Provider');
    
    
  }

  validaUsuario(usuarioAux : Usuario ){
    let valido = false;
    return this.http.get('assets/json/usuarios.json');
    
  }

}
