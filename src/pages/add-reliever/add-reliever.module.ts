import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddReliever } from './add-reliever';

@NgModule({
  declarations: [
    AddReliever,
  ],
  imports: [
    IonicPageModule.forChild(AddReliever),
  ],
  exports: [
    AddReliever
  ]
})
export class AddRelieverModule {}
