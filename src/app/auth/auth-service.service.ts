import { Injectable} from '@angular/core';
import {AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app' ;



@Injectable({
  providedIn: 'root'
})
export class AuthServiceService{

  private user : firebase.User ;

  constructor(private fireAuth : AngularFireAuth ) {
       this.fireAuth. authState.subscribe(authuser => {this.user = authuser; }) ;
   }

   private loginEmailPass () {

   }

   private logout () {
     this.fireAuth.
  }
}
