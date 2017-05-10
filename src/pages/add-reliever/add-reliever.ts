import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, ToastController } from 'ionic-angular';

import { AddMed } from '../add-med/add-med';

import { Subscription } from 'rxjs/Subscription';
import { DataProvider } from '../../providers/data';
import { AngularFire , FirebaseListObservable , FirebaseObjectObservable } from 'angularfire2';
import firebase from 'firebase';

/**
 * Generated class for the AddReliever page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-add-reliever',
  templateUrl: 'add-reliever.html',
})
export class AddReliever {

	form: any;

  authUserSub : Subscription;
  authUser : FirebaseObjectObservable<any>;
  authUserIdSub : Subscription;
  authUserId : string;
  relieverInhaler: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private data: DataProvider, public af: AngularFire, public loadingCtrl: LoadingController, public toastCtrl: ToastController) {
  	this.form= {
  		relieverName: '',
  		relieverDosage: ''
  	}
    this.relieverInhaler = af.database.list('/relieverInhaler');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddReliever');
  }

  AddReliever()
  {
    if(this.form.relieverName == "" || this.form.relieverDosage == "")
    {
          let alertfill = this.alertCtrl.create({
      title: 'Perhatian!',
      subTitle: 'Sila lengkapkan semua butiran dahulu',
      buttons: ['Ok']
    });
    alertfill.present();
    }
    else
    {
        let alertconfirm = this.alertCtrl.create({
        title: 'Pasti hantar?',
        message: 'Sila pastikan maklumat yang disertai adalah benar',
        buttons: [
          {
            text: 'Balik',
            role: 'cancel',
            handler: () => {
              // console.log('Cancel clicked');
            }
          },
          {
            text: 'Hantar',
            handler: () => {

              this.relieverInhaler.push({
                relieverName: this.form.relieverName,
                relieverDosage: this.form.relieverDosage
              })

              this.navCtrl.pop();

              let toast = this.toastCtrl.create({
                message: 'Aduan anda telah berjaya direkodkan!',
                duration: 3000,
                position: 'top'
              });

              toast.present();
            }
          }
        ]
      });
      alertconfirm.present();
    }

  }

}
