import { Component, OnInit ,ViewEncapsulation} from '@angular/core';
import { ProductService } from '../../model/product-service';
import {Product} from '../..//model/product';
import { ProductFirestoreService } from 'src/app/model/product-firestore-service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireModule, FirebaseApp } from '@angular/fire';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  products: Product[] = [];

	responsiveOptions : any[];


  constructor(private productService: ProductService, private firestoreProdService : ProductFirestoreService, private app : FirebaseApp) {
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];



   }


  	ngOnInit() {
		 //this.productService.getProductsWines().then(products => {
		// 	this.products = products;
		//});
    this.firestoreProdService.getWines().then ((prods:any) => {
      this.products =prods ;
      console.log("step2") ;
      console.log(this.products) ;
   } ) ;
    }


    inventoryStatus(prod : Product): string {

       let status: string[] = ['OUTOFSTOCK', 'INSTOCK', 'LOWSTOCK'];

       switch (true){
           case ((prod.QtyFree !=null && prod.QtyFree!=undefined) ? prod.QtyFree : 0 )<=0 :
             return status[0] ; break ;
           case ((prod.QtyFree !=null && prod.QtyFree!=undefined) ? prod.QtyFree : 0 )<=3 :
             return status[2] ; break ;
           default :
           return status[1] ; break ;
       }
     }


    //  getImagePath (productImage:string) :string {
    //   let imagePath :string="" ;

    //   imagePath =  await this.app.storage().
    //   refFromURL("gs://"+environment.firebaseConfig.storageBucket+"/Wines/medium/" + productImage).getDownloadURL() ;
    //   // . getDownloadURL()
    //   // .then (url => { imagePath = url ; })
    //   // .catch (error => {
    //   //   console.log("Error2:" , error);
    //   //   imagePath= "" ;
    //   //  })

    //   console.log ("Storage:",imagePath) ;
    //    return imagePath ;
    //  }
}
