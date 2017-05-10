import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AddReliever } from '../add-reliever/add-reliever';
import { AddPreventer } from '../add-preventer/add-preventer';
import { Subscription } from 'rxjs/Subscription';
import { DataProvider } from '../../providers/data';
import { AngularFire , FirebaseListObservable , FirebaseObjectObservable } from 'angularfire2';
import firebase from 'firebase';

/**
 * Generated class for the AddMed page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-add-med',
  templateUrl: 'add-med.html'
})
export class AddMed implements OnInit {

  preventers: any;
  relievers: any;
  authUserSub : Subscription;
  authUser : FirebaseObjectObservable<any>;
  authUserIdSub : Subscription;
  authUserId : string;
	
	inhalerType:string = "preventer";

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFire, public loadingCtrl: LoadingController) {
  }

  ngOnInit(){

    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    loading.dismiss();


    this.af.database.list('/preventerInhaler', {
    }).map((preventer) => {
      return preventer.sort(function(a,b){
        return b.tsid - a.tsid
      });
    }).subscribe((value) => {
      this.preventers = value
      loading.dismiss();
    })
    {
      this.af.database.list('/relieverInhaler', {
    }).map((reliever) => {
      return reliever.sort(function(a,b){
        return b.tsid - a.tsid
      });
    }).subscribe((value) => {
      this.relievers = value
      loading.dismiss();
    });
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddMed');
    this.authUserIdSub = this.af.auth.subscribe((currentUser) => {
      this.authUserId = currentUser.uid;
    });
  }

  homePop() {
  	this.navCtrl.pop(HomePage);
  }

  addReliever() {
    this.navCtrl.push(AddReliever);
  }

  addPreventer() {
    this.navCtrl.push(AddPreventer);
  }
}
