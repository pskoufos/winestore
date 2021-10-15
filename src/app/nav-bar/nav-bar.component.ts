
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';


import {MenuItem, MessageService} from "primeng/api";
import { AuthServiceService } from '../auth/auth-service.service';



@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  providers: [MessageService]
})
export class NavBarComponent implements OnInit {

  constructor(private auth : AuthServiceService, public afAuth : AngularFireAuth ,private  router : Router, private messageService: MessageService)  {
   }

   private logout() {
      this.auth.logout() ;
   }


  //items$: Observable<MenuItem[]>;

  items: MenuItem[];
  userMenu: MenuItem[]  ;
  guestMenu : MenuItem[] ;


  ngOnInit(): void {
    this.items = this.getMenuItems(false) ;
    this.guestMenu = [
      {
          icon: 'fa fa-user-plus fa-lg',
          label: 'Νέος Λογαρ.',
          command: () => {  }
      },
      {separator:true},
      {
          icon: 'fa fa-sign-in fa-lg',
          label: 'Σύνδεση',
          command: () => {this.auth.loginEmailPass() ; }
      }]



      this.userMenu = [
        {
          // tooltipOptions: {tooltipLabel: "Προφίλ",tooltipPosition: "left"},
          label: 'Προφίλ',
          icon: 'fa fa-id-card-o fa-lg',
          command: () => { this.router.navigate(['/custInfo']); }
        },
        {
          // tooltipOptions: {tooltipLabel: "Ιστορικό Παραγγελιών",tooltipPosition: "left" },
          label:'Ιστορικό Παραγγελιών',
          icon: 'fa fa-folder-open fa-lg',
          command: () => { }
        },
        {separator:true},
        {
          label: 'Αποσύνδεση' ,
          icon: 'fa fa-sign-out fa-lg',
          command: () => {this.auth.logout();}
      },

      ]


  }



  private getMenuItems(isLoggedIn: boolean): MenuItem[] {
    return [
      {
        label:'Προίόντα', icon:'pi pi-fw pi-file',
        items:[
          {label: 'Κρασιά',icon: 'pi pi-fw pi-plus',
            items:
            [
              {label: 'Λευκά', icon: 'pi pi-fw pi-bookmark'},
              {label: 'Ερυθρά', icon: 'pi pi-fw pi-video' },
            ]},
          {
            label:'Ουισκυ', icon:'pi pi-fw pi-plus',
            items:[
              {label:'Σκωτία',  icon:'pi pi-fw pi-bookmark'},
              {label:'Ιαπωνία',  icon:'pi pi-fw pi-video'},
              {label:'Ιρλανδία', icon:'pi pi-fw pi-video'},
              {label:'Bourbon',  icon:'pi pi-fw pi-video'}
            ]},
          {separator:true}
        ]
      }
      // ,{ label:'-',icon:PrimeIcons.SHOPPING_CART},
      // { label:isLoggedIn ? 'logedIn' :'Guest', icon:'pi pi-fw pi-user',
      //   items:[
      //     {label:'SingUp', icon:'pi pi-fw pi-user-plus', visible:!isLoggedIn, command: (event: Event) => { this.auth.loginEmailPass();} },
      //     {label:'SingIn', icon:'pi pi-fw pi-user-minus' , visible :!isLoggedIn },
      //     {separator:true},
      //     {label:'Sign out', icon:'pi pi-fw pi-power-off', visible: isLoggedIn, command: (event: Event) => { this.logout();}}
      //   ]
      // }
    ];
  }


  //   // console.log('menu:', this.myAuth.user?.displayName) ;
  //   private getMenuItems(isLoggedIn: boolean): MenuItem[] {
  //     return

  // }//getMenu Item

}//MenuBar
