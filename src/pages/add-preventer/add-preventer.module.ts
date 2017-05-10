import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddPreventer } from './add-preventer';

@NgModule({
  declarations: [
    AddPreventer,
  ],
  imports: [
    IonicPageModule.forChild(AddPreventer),
  ],
  exports: [
    AddPreventer
  ]
})
export class AddPreventerModule {}
