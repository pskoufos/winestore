import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {environment} from "../environments/environment";
import { AngularFireModule} from "@angular/fire";
import { AngularFirestoreModule} from "@angular/fire/firestore";
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {MenubarModule} from "primeng/menubar";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import { SharedModule } from 'primeng/api';
import {TabViewModule} from "primeng/tabview";
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    MenubarModule,
    BrowserAnimationsModule,
    InputTextModule,
    ButtonModule,
    TabViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
