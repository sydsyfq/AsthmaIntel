import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AsthmaLog } from './asthma-log';

@NgModule({
  declarations: [
    AsthmaLog,
  ],
  imports: [
    IonicPageModule.forChild(AsthmaLog),
  ],
  exports: [
    AsthmaLog
  ]
})
export class AsthmaLogModule {}
