import { ApplicationRef, Injectable} from '@angular/core';
import {AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app' ;
import {  Observable, Subject} from 'rxjs';
import {AngularFirestore} from '@angular/fire/firestore' ;

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

 user$  = new Observable <any>() ;
 isLoggedIn$  = new Subject<boolean> ();


  constructor(public fireAuth : AngularFireAuth, public app : ApplicationRef , public afs : AngularFirestore ) {
    // this.user$ = new Observable ( (subscriber) => {
    //     this.fireAuth.onAuthStateChanged(subscriber) ;
    // })
    this.fireAuth.onAuthStateChanged((user) => {
      if (user) {
        console.log('!! uname='+ user.displayName) ;
        this.isLoggedIn$.next(true) ;
        this.user$= new Observable( subscriber => {subscriber.next(user) ; });
        app.tick();
      }// if
      else {
        console.log(user) ;
        this.isLoggedIn$.next(false) ;
        this.user$= new Observable( subscriber => {subscriber.next(null) ; });
        app.tick() ;
      }
    }//stateChanged

    ).catch (error => console.log (error))

   }//ctor



   public loginEmailPass () {
        this.fireAuth.signInWithEmailAndPassword('pskoufos@gmail.com', 'psk2716')
        .then (fuser=> {

          fuser.user?.updateProfile({displayName:'Panos Skoufos', photoURL: undefined}) ;
            console.log (fuser) ;
         })
         .catch(error => {console.log(error) ; }) ;
   }// loginpass

   public logout () {
     this.fireAuth.signOut()
     .then( () => {
      console.log('log out...') ;  } )
     .catch(error => {console.log(error) ; }) ;
  }//logout


}// class
