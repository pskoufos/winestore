import { ApplicationRef, Injectable} from '@angular/core';
import {AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app' ;
import {AngularFirestore} from '@angular/fire/firestore' ;
import {first} from 'rxjs/operators' ;

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {


  constructor(public afAuth : AngularFireAuth, public app : ApplicationRef , public afs : AngularFirestore ) {

   }//ctor

   public loginEmailPass () {
        this.afAuth.signInWithEmailAndPassword('pskoufos@gmail.com', 'psk2716')
        .then (fuser=> {

          fuser.user?.updateProfile({displayName:'Panos Skoufos', photoURL: undefined}) ;
            console.log (fuser) ;
         })
         .catch(error => {console.log(error) ; }) ;
   }// loginpass


   public logout () {
     this.afAuth.signOut()
     .then( () => {
      console.log('log out...') ;  } )
     .catch(error => {console.log(error) ; }) ;
  }//logout



  public isLoggedIn() {
    return this.afAuth.authState.pipe(first()).toPromise();
 }


}// class
