import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Login } from '../login/login';
import { AddMed } from '../add-med/add-med';
import { AsthmaLog } from '../asthma-log/asthma-log';
import { DocApp } from '../doc-app/doc-app';
import { GenReport } from '../gen-report/gen-report';
import { MedUsage } from '../med-usage/med-usage';
import { Profile } from '../profile/profile';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  addmedpush(){
    this.navCtrl.push(AddMed);
  }

  asthmalogpush(){
    this.navCtrl.push(AsthmaLog);
  }

  docapppush(){
    this.navCtrl.push(DocApp);
  }

  genreppush(){
    this.navCtrl.push(GenReport);
  }

  medusagepush(){
    this.navCtrl.push(MedUsage);
  }

  profilepush(){
    this.navCtrl.push(Profile);
  }

  logoutpush(){
    this.navCtrl.push(Login);
  }

}
