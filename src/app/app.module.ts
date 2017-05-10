import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AddMed } from '../pages/add-med/add-med';
import { AsthmaLog } from '../pages/asthma-log/asthma-log';
import { DocApp } from '../pages/doc-app/doc-app';
import { FirstStep } from '../pages/first-step/first-step';
import { FirstStepSecond } from '../pages/first-step-second/first-step-second';
import { FirstSetupParent } from '../pages/first-setup-parent/first-setup-parent';
import { GenReport } from '../pages/gen-report/gen-report';
import { MedUsage } from '../pages/med-usage/med-usage';
import { Login } from '../pages/login/login';
import { Profile } from '../pages/profile/profile';
import { SignUp } from '../pages/sign-up/sign-up';
import { HomeParent } from '../pages/home-parent/home-parent';
import { AddReliever } from '../pages/add-reliever/add-reliever';
import { AddPreventer } from '../pages/add-preventer/add-preventer';

import { AuthProvider } from '../providers/auth';
import { DataProvider } from '../providers/data';

import { AngularFireModule } from 'angularfire2';

var firebaseConfig = {
    apiKey: "AIzaSyBYyyn9aJrYYTMtEWDLR8yPJ55SNVU9HNY",
    authDomain: "asthma-intel.firebaseapp.com",
    databaseURL: "https://asthma-intel.firebaseio.com",
    projectId: "asthma-intel",
    storageBucket: "asthma-intel.appspot.com",
    messagingSenderId: "623776753130"
  };

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': '3451f19d'
  }
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddMed,
    AsthmaLog,
    DocApp,
    FirstStep,
    FirstStepSecond,
    FirstSetupParent,
    GenReport,
    MedUsage,
    Login,
    Profile,
    SignUp,
    HomeParent,
    AddReliever,
    AddPreventer
 
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddMed,
    AsthmaLog,
    DocApp,
    FirstStep,
    FirstStepSecond,
    FirstSetupParent,
    GenReport,
    MedUsage,
    Login,
    Profile,
    SignUp,
    HomeParent,
    AddReliever,
    AddPreventer
  ],
  providers: [,DataProvider,AuthProvider,StatusBar,SplashScreen,{provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
