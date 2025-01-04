import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoPageRoutingModule } from './info-page-routing.module';
import { InfoPageComponent } from './info-page.component';
import { UsersideNavModule } from '../userside-nav/userside-nav.module';


@NgModule({
  declarations: [
    InfoPageComponent
  ],
  imports: [
    CommonModule,
    InfoPageRoutingModule,
    UsersideNavModule
  ]
})
export class InfoPageModule { }
