
import { Component, OnInit } from '@angular/core';

import {MenuItem, MessageService} from "primeng/api";
import { AuthServiceService } from '../auth/auth-service.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  providers: [MessageService]
})
export class NavBarComponent implements OnInit {

  constructor(public auth : AuthServiceService , private messageService: MessageService)  {
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
        tooltipOptions: {tooltipLabel: "Νέος Λογαριασμός",tooltipPosition: "left" },
          icon: 'fa fa-user-plus fa-lg',
          command: () => {  }
      },
      {
        tooltipOptions: {tooltipLabel: "Σύνδεση",tooltipPosition: "left"},
                  icon: 'fa fa-sign-in fa-lg',
          command: () => {this.auth.loginEmailPass() ; }
      }]



      this.userMenu = [
        {
          tooltipOptions: {tooltipLabel: "Προφίλ",tooltipPosition: "left"},
            icon: 'fa fa-id-card-o fa-lg',
            command: () => {  }
        },
        {
          tooltipOptions: {tooltipLabel: "Ιστορικό Παραγγελιών",tooltipPosition: "left" },
            icon: 'fa fa-folder-open fa-lg',
            command: () => { }
        },
        {
          tooltipOptions: {tooltipLabel: "Αποσύνδεση",tooltipPosition: "left" },
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
