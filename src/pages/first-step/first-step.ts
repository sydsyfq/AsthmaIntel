import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home' ;
import { FirstStepSecond } from '../first-step-second/first-step-second'

/**
 * Generated class for the FirstStep page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-first-step',
  templateUrl: 'first-step.html',
})
export class FirstStep {

  form: any;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.form={
      relieverName: '',
      relieverDosage: ''
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FirstStep');
  }

  firstStepSecond(){
    this.navCtrl.setRoot(FirstStepSecond);
  }

}
