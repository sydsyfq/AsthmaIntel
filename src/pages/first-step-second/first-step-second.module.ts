import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FirstStepSecond } from './first-step-second';

@NgModule({
  declarations: [
    FirstStepSecond,
  ],
  imports: [
    IonicPageModule.forChild(FirstStepSecond),
  ],
  exports: [
    FirstStepSecond
  ]
})
export class FirstStepSecondModule {}
