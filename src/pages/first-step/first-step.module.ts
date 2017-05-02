import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FirstStep } from './first-step';

@NgModule({
  declarations: [
    FirstStep,
  ],
  imports: [
    IonicPageModule.forChild(FirstStep),
  ],
  exports: [
    FirstStep
  ]
})
export class FirstStepModule {}
