import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';


/**
 * Generated class for the FirstStepSecond page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-first-step-second',
  templateUrl: 'first-step-second.html',
})
export class FirstStepSecond {

	form: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.form={
  		preventerName: '',
  		preventerDosage: '',
  		preventerDailyUsage: ''
  	}
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FirstStepSecond');
  }

  homePage(){
  	this.navCtrl.setRoot(HomePage);
  }

}
