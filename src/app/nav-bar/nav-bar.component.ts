import { Component, OnInit } from '@angular/core';

import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }
  items: MenuItem[] =[];

  ngOnInit(): void {
    this.items = [
      {
        label:'Προίόντα',
        icon:'pi pi-fw pi-file',
        items:[
          {
            label: 'Κρασιά',
            icon: 'pi pi-fw pi-plus',
            items: [
              {
                label: 'Λευκά',
                icon: 'pi pi-fw pi-bookmark'
              },
              {
                label: 'Ερυθρά',
                icon: 'pi pi-fw pi-video'
              },
            ]},
          {
            label:'Ουισκυ',
            icon:'pi pi-fw pi-plus',
            items:[
              { label:'Σκωτία',
                icon:'pi pi-fw pi-bookmark'},
              {label:'Ιαπωνία',
                icon:'pi pi-fw pi-video'},
              {label:'Ιρλανδία',
                icon:'pi pi-fw pi-video'},
              {label:'Bourbon',
                icon:'pi pi-fw pi-video'}
            ]
          },
          {
            label:'Delete',
            icon:'pi pi-fw pi-trash',
          },
          {
            separator:true
          },
          {
            label:'Export',
            icon:'pi pi-fw pi-external-link'
          }
        ]
      },
      {
        label:'Edit',
        icon:'pi pi-fw pi-pencil',
        items:[
          {
            label:'Left',
            icon:'pi pi-fw pi-align-left'
          },
          {
            label:'Right',
            icon:'pi pi-fw pi-align-right'
          },
          {
            label:'Center',
            icon:'pi pi-fw pi-align-center'
          },
          {
            label:'Justify',
            icon:'pi pi-fw pi-align-justify'
          },

        ]
      },
      {
        label:'Users',
        icon:'pi pi-fw pi-user',
        items:[
          {
            label:'Singup',
            icon:'pi pi-fw pi-user-plus',

          },
          {
            label:'SingIN',
            icon:'pi pi-fw pi-user-minus',
          },
          {
            label:'Search',
            icon:'pi pi-fw pi-users',
            items:[
              {
                label:'Filter',
                icon:'pi pi-fw pi-filter',
                items:[
                  {
                    label:'Print',
                    icon:'pi pi-fw pi-print'
                  }
                ]
              },
              {
                icon:'pi pi-fw pi-bars',
                label:'List'
              }
            ]
          }
        ]
      },
      {
        label:'Events',
        icon:'pi pi-fw pi-calendar',
        items:[
          {
            label:'Edit',
            icon:'pi pi-fw pi-pencil',
            items:[
              {
                label:'Save',
                icon:'pi pi-fw pi-calendar-plus'
              },
              {
                label:'Delete',
                icon:'pi pi-fw pi-calendar-minus'
              },

            ]
          },
          {
            label:'Archieve',
            icon:'pi pi-fw pi-calendar-times',
            items:[
              {
                label:'Remove',
                icon:'pi pi-fw pi-calendar-minus'
              }
            ]
          }
        ]
      },
      {
        label:'Quit',
        icon:'pi pi-fw pi-power-off'
      }
    ];

  }//onInit

}//MenuBar
