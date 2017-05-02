import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddMed } from './add-med';

@NgModule({
  declarations: [
    AddMed,
  ],
  imports: [
    IonicPageModule.forChild(AddMed),
  ],
  exports: [
    AddMed
  ]
})
export class AddMedModule {}
