import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GenReport } from './gen-report';

@NgModule({
  declarations: [
    GenReport,
  ],
  imports: [
    IonicPageModule.forChild(GenReport),
  ],
  exports: [
    GenReport
  ]
})
export class GenReportModule {}
