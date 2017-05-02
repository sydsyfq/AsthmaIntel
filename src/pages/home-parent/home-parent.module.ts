import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeParent } from './home-parent';

@NgModule({
  declarations: [
    HomeParent,
  ],
  imports: [
    IonicPageModule.forChild(HomeParent),
  ],
  exports: [
    HomeParent
  ]
})
export class HomeParentModule {}
