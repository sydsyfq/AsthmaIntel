import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, ToastController } from 'ionic-angular';

import { AddMed } from '../add-med/add-med';

import { Subscription } from 'rxjs/Subscription';
import { DataProvider } from '../../providers/data';
import { AngularFire , FirebaseListObservable , FirebaseObjectObservable } from 'angularfire2';
import firebase from 'firebase';

/**
 * Generated class for the AddPreventer page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-add-preventer',
  templateUrl: 'add-preventer.html',
})
export class AddPreventer {

	form: any;

  authUserSub : Subscription;
  authUser : FirebaseObjectObservable<any>;
  authUserIdSub : Subscription;
  authUserId : string;
  preventerInhaler: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private data: DataProvider, public af: AngularFire, public loadingCtrl: LoadingController, public toastCtrl: ToastController) {
  	this.form= {
  		name: '',
  		dosage: '',
  		dailyDosage: ''
  	}
    this.preventerInhaler = af.database.list('/preventerInhaler');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPreventer');

    this.authUserIdSub = this.af.auth.subscribe((currentUser) => {
      this.authUserId = currentUser.uid;
    });
}

addPreventer()
  {
    if(this.form.name == "" || this.form.dosage == "" || this.form.dailyDosage == "")
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

              this.preventerInhaler.push({
                name: this.form.name,
                dosage: this.form.dosage,
                dailyDosage: this.form.dailyDosage
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
