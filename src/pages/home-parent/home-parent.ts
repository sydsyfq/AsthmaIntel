import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Login } from '../login/login'

/**
 * Generated class for the HomeParent page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-home-parent',
  templateUrl: 'home-parent.html',
})
export class HomeParent {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeParent');
  }

  logOutPush(){
  	this.navCtrl.setRoot(Login);
  }

}
