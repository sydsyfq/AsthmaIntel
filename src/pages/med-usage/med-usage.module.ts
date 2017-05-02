import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MedUsage } from './med-usage';

@NgModule({
  declarations: [
    MedUsage,
  ],
  imports: [
    IonicPageModule.forChild(MedUsage),
  ],
  exports: [
    MedUsage
  ]
})
export class MedUsageModule {}
