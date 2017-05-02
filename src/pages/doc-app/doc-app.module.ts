import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DocApp } from './doc-app';

@NgModule({
  declarations: [
    DocApp,
  ],
  imports: [
    IonicPageModule.forChild(DocApp),
  ],
  exports: [
    DocApp
  ]
})
export class DocAppModule {}
