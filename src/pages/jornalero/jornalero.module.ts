import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JornaleroPage } from './jornalero';

@NgModule({
  declarations: [
    JornaleroPage,
  ],
  imports: [
    IonicPageModule.forChild(JornaleroPage),
  ],
})
export class JornaleroPageModule {}
