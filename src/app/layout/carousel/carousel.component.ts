import { Component, OnInit ,ViewEncapsulation} from '@angular/core';
import { ProductService } from '../../model/product-service';
import {Product} from '../..//model/product';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  products: Product[] = [];

	responsiveOptions : any[];


  constructor(private productService: ProductService) {
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
		this.productService.getProductsWines().then(products => {
			this.products = products;
		});
    }


}
