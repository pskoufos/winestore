import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Product } from "./product";


@Injectable()
export class ProductFirestoreService  {

  constructor(private db:AngularFirestore) {

  }

  getWines() {
   return this.db.collection("wines_gr").ref
    .where("Cat1","==", "Red")
    .get()
   .then((results)=> {
       console.log("psk") ;
       const prods : Product[] =[];
       results.forEach( (doc) => {
         //console.log(doc.id , " --> " , doc.data()) ;
         prods.push (<Product>doc.data()) ;
       })
       console.log ("items=", prods.length) ;
       return prods ;
     })
    .catch((error)=> {console.log("Error getting docs", error)});
  }

}
