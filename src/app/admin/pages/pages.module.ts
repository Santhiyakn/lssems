import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { AdminModule } from '../admin.module';
import { SidenavbarModule } from '../sidenavbar/sidenavbar.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PagesComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    AdminModule,
    SidenavbarModule,
    FormsModule
  ]
})
export class PagesModule { }
