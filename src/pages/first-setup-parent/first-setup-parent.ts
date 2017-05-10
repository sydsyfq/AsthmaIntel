import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, ToastController } from 'ionic-angular';
import { DataProvider } from '../../providers/data';
import { AngularFire , FirebaseListObservable , FirebaseObjectObservable } from 'angularfire2';
import firebase from 'firebase';

import { Subscription } from 'rxjs/Subscription';
import { AuthProvider } from '../../providers/auth';

import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-first-setup-parent',
  templateUrl: 'first-setup-parent.html',
})
export class FirstSetupParent {

	form: any;
	parentUsername: string;
 	authUserSub : Subscription;
	  authUser : FirebaseObjectObservable<any>;
	  authUserIdSub : Subscription;
	  authUserId : string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private data: DataProvider, public af: AngularFire, public loadingCtrl: LoadingController, public toastCtrl: ToastController) {
  	this.form= {
  		parentUsername: '',
  		parentPassword: ''
  	}
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FirstSetupParent');
  
    this.authUserIdSub = this.af.auth.subscribe((currentUser) => {
      this.authUserId = currentUser.uid;
    });
    this.authUser = this.af.database.object('/authUsers/'+ this.authUserId);
    this.authUserSub = this.authUser.subscribe((userData) => {
        this.form.parentUsername = userData.parentUsername,
        this.form.parentPassword = userData.parentPassword
    });
}

  next() {
  	this.navCtrl.setRoot(HomePage);
  }

   push()
  {
    if(this.form.parentUsername == "" || this.form.parentPassword == "")
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

              this.authUser.update({
                parentUsername: this.form.parentUsername,
                parentPassword: this.form.parentPassword
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

