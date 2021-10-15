import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Customer } from 'src/app/model/customer';
import {Observable} from 'rxjs' ;
import {take, first} from 'rxjs/operators' ;
import { AngularFireAuth } from '@angular/fire/auth';



@Component({
  selector: 'app-cust-info',
  templateUrl: './cust-info.component.html',
  styleUrls: ['./cust-info.component.css']
})
export class CustInfoComponent implements  OnDestroy {

  customer : Customer;
  userid : string ;
  private custDocRef:AngularFirestoreDocument<Customer> ;
  custDoc : Observable<Customer>  ;
  custPath ='/customers/' ;

  constructor(private afAuth : AngularFireAuth, private afs: AngularFirestore ) {
      this.afAuth.authState.subscribe(
        user => {
          if (user) {
            this.userid = user.uid ;
            const path:string = this.custPath + 'doc' + this.userid ;
            this.custDocRef= this.afs.doc<Customer>(path) ;
            //console.log('docref:' + this.custDocRef.) ;
            //this.custDoc!= this.custDocRef.valueChanges() ;
            this.custDocRef.valueChanges().pipe(first()).toPromise().then(
                  (data)=> {
                    console.log(data) ;
                      if (data!=undefined) {
                          this.customer = data ;
                          console.log("cust") ;
                          console.log( this.customer) ;
                      }
                      else {
                          let tmpcust:Customer = {uid: user.uid, custName:user.displayName!, custCode:'' , locked:false , discount:0} ;
                          this.afs.doc(path).set(tmpcust)
                          .then(
                            ()=> {console.log  ('doc Created') ;}
                          )
                          .catch(
                            error => {console.log ('Save Doc Eror') ; console.log (error) ;  }
                          ) ;
                      }
                    }//cust
            ) ;
          }
          else {
            console.log ('No user to show') ;
          }//ifuser

        }//user
      )//subscription
   }//ctor


  ngOnDestroy(): void {}




  docExists(path: string) {
    return this.afs.doc(path).valueChanges().pipe(first()).toPromise() ;
 }

  getUser() {
    return this.afAuth.user.pipe(first()).toPromise() ;
 }


}
