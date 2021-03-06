import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Observable } from 'rxjs/Observable';
// import { Facebook } from 'ionic-native';
import firebase from 'firebase';
// import * as firebase from 'firebase';

// Providers
import { DataProvider } from './data';

@Injectable()
export class AuthProvider {

  constructor(private af: AngularFire, private data: DataProvider, private platform: Platform) {}

  getUserData() {
    return Observable.create(observer => {
      this.af.auth.subscribe(authData => {
        if (authData) {
          this.data.object('authUsers/' + authData.uid).subscribe(userData => {
            observer.next(userData);
          });
        } else {
          observer.error();
        }
      });
    });
  }

  registerUser(credentials: any) {
    return Observable.create(observer => {
      this.af.auth.createUser(credentials).then((authData: any) => {
        this.af.database.list('authUsers').update(authData.uid, {
          email: authData.auth.email,
          emailVerified: false,
          provider: 'email',
        });
        credentials.created = true;
        observer.next(credentials);
      }).catch((error: any) => {
        if (error) {
          switch (error.code) {
            case 'INVALID_EMAIL':
              observer.error('E-mail invalid.');
              break;
            case 'EMAIL_TAKEN':
              observer.error('E-mail taken.');
              break;
            case 'NETWORK_ERROR':
              observer.error('Something wrong with the network.');
              break;
            default:
              observer.error(error);
          }
        }
      });
    });
  }

  loginWithEmail(credentials) {
    return Observable.create(observer => {
      this.af.auth.login(credentials, {
        provider: AuthProviders.Password,
        method: AuthMethods.Password
      }).then((authData) => {
        observer.next(authData);
      }).catch((error) => {
        observer.error(error);
      });
    });
  }

  sendPasswordResetEmail(email) {
    // console.log(email);
    return Observable.create(observer => {
      firebase.auth().sendPasswordResetEmail(email).then(function() {
        observer.next();
        // Email sent.
      }, function(error) {
        observer.error(error);
        // An error happened.
      });
    });
  }

  logout() {
    this.af.auth.logout();
  }


  // loginWithFacebook() {
  //   return Observable.create(observer => {
  //     if (this.platform.is('cordova')) {
  //       Facebook.login(['public_profile', 'email']).then(facebookData => {
  //         let provider = firebase.auth.FacebookAuthProvider.credential(facebookData.authResponse.accessToken);
  //         firebase.auth().signInWithCredential(provider).then(firebaseData => {
  //           this.af.database.list('users').update(firebaseData.uid, {
  //             name: firebaseData.displayName,
  //             email: firebaseData.email,
  //             provider: 'facebook',
  //             image: firebaseData.photoURL
  //           });
  //           observer.next();
  //         });
  //       }, error => {
  //         observer.error(error);
  //       });
  //     } else {
  //       this.af.auth.login({
  //         provider: AuthProviders.Facebook,
  //         method: AuthMethods.Popup
  //       }).then((facebookData) => {
  //         this.af.database.list('users').update(facebookData.auth.uid, {
  //           name: facebookData.auth.displayName,
  //           email: facebookData.auth.email,
  //           provider: 'facebook',
  //           image: facebookData.auth.photoURL
  //         });
  //         observer.next();
  //       }).catch((error) => {
  //         console.info("error", error);
  //         observer.error(error);
  //       });
  //     }
  //   });
  // }

}
