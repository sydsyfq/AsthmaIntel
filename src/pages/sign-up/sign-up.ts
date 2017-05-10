import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';

import { Login } from '../login/login';
import { FirstStep } from '../first-step/first-step';


import { AuthProvider } from '../../providers/auth';

/**
 * Generated class for the SignUp page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({

  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUp {

  userType:string ='patient';
  error: any;
  form: any;
  formParent: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthProvider, private loadingCtrl: LoadingController, private alertCtrl: AlertController) {
    this.form = {
      name: '',
      email: '',
      password: ''
      //usernameParent: '',
      //passwordParent: ''
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUp');
  }

  register() {

    if(this.form.name == "" || this.form.email == "" || this.form.password == "") /*|| this.form.usernameParent == "" || this.form.passwordParent == ""*/
    {
          let alertfill = this.alertCtrl.create({
      title: 'Attention!',
      subTitle: 'Please complete all details!',
      buttons: ['Ok']
    });
    alertfill.present();
    }
    else
    {let loading = this.loadingCtrl.create({
      content: 'Loading..'
    });
    loading.present();

    this.auth.registerUser(this.form).subscribe(registerData => {
      this.auth.loginWithEmail(registerData).subscribe(loginData => {
        setTimeout(() => {
          loading.dismiss();
          let alert = this.alertCtrl.create({
            title: 'Welcome!',
            subTitle: 'You have successfully created your account',
            buttons: ['OK']
          });
          alert.present();
          this.navCtrl.setRoot(FirstStep);
        }, 1000);
      }, loginError => {
        setTimeout(() => {
          loading.dismiss();
          this.error = loginError;
        }, 1000);
      });
    }, registerError => {
      setTimeout(() => {
        loading.dismiss();
        this.error = registerError;
      }, 1000);
    });
  
  }
  }

  homePop(){
    this.navCtrl.pop(Login);
  }
}