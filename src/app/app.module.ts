import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ComponentsModule } from '../components/components.module';
import { ProductoServiceProvider } from '../providers/producto-service/producto-service';
import { UserServiceProvider } from '../providers/user-service/user-service';
import { LoginPageModule } from '../pages/login/login.module';
import { HttpClientModule } from '@angular/common/http';
import { ListaProductosPage } from '../pages/lista-productos/lista-productos';
import { ListaProductosPageModule } from '../pages/lista-productos/lista-productos.module';
import { DetallaProductoPageModule } from '../pages/detalla-producto/detalla-producto.module';
import { CarritoComprasPageModule } from '../pages/carrito-compras/carrito-compras.module';
import { GoogleMap } from '@ionic-native/google-maps';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ComponentsModule,
    LoginPageModule,
    HttpClientModule,
    ListaProductosPageModule,
    DetallaProductoPageModule,
    CarritoComprasPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},    
    ProductoServiceProvider,
    UserServiceProvider,
    GoogleMap
  ]
})
export class AppModule {}
