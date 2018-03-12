import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetallaProductoPage } from './detalla-producto';

@NgModule({
  declarations: [
    DetallaProductoPage,
  ],
  imports: [
    IonicPageModule.forChild(DetallaProductoPage),
  ],
})
export class DetallaProductoPageModule {}
