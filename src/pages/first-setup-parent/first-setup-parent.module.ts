import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FirstSetupParent } from './first-setup-parent';

@NgModule({
  declarations: [
    FirstSetupParent,
  ],
  imports: [
    IonicPageModule.forChild(FirstSetupParent),
  ],
  exports: [
    FirstSetupParent
  ]
})
export class FirstSetupParentModule {}
