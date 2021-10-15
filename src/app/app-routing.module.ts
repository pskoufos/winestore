import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import {CustInfoComponent} from './user/cust-info/cust-info.component' ;

const routes: Routes = [
  {path:'',component: LayoutComponent },
  {path:'custInfo', component: CustInfoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
