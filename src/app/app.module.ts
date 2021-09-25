//Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  HttpClientModule } from '@angular/common/http';

//firebase
import { AngularFireModule} from "@angular/fire";
import { AngularFirestoreModule} from "@angular/fire/firestore";
import {AngularFireStorageModule} from "@angular/fire/storage" ;

//PrimeNG
import {ButtonModule} from "primeng/button";
import {TabViewModule} from "primeng/tabview";
import {SpeedDialModule} from 'primeng/speeddial';
import {MenubarModule} from "primeng/menubar";
import {InputTextModule} from "primeng/inputtext";
import {CarouselModule} from "primeng/carousel" ;

//APP
import {environment} from "../environments/environment";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { CarouselComponent } from './layout/carousel/carousel.component';
import { OffersComponent } from './layout/offers/offers.component';
import { GiftsComponent } from './layout/gifts/gifts.component';
import { ProductService } from './model/product-service';
import { NewArrivalsComponent } from './layout/new-arrivals/new-arrivals.component';
import { SelectionWinesComponent } from './layout/selection-wines/selection-wines.component';
import { SelectionWhiskeyComponent } from './layout/selection-whiskey/selection-whiskey.component';
import { SelectionFoodComponent } from './layout/selection-food/selection-food.component';
import { SelectionGrDistilationsComponent } from './layout/selection-gr-distilations/selection-gr-distilations.component';
import { SelectionOtherComponent } from './layout/selection-other/selection-other.component';
import { ProductFirestoreService } from './model/product-firestore-service';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    LayoutComponent,
    CarouselComponent,
    OffersComponent,
    GiftsComponent,
    NewArrivalsComponent,
    SelectionWinesComponent,
    SelectionWhiskeyComponent,
    SelectionFoodComponent,
    SelectionGrDistilationsComponent,
    SelectionOtherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    MenubarModule,
    BrowserAnimationsModule,
    InputTextModule,
    ButtonModule,
    TabViewModule,
    CarouselModule,
    HttpClientModule,
    SpeedDialModule
  ],
  providers: [ProductService, ProductFirestoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }

