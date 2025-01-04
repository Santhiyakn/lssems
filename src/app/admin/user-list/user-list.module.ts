import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserListRoutingModule } from './user-list-routing.module';
import { UserListComponent } from './user-list.component';
import { AdminModule } from '../admin.module';
import { SidenavbarModule } from '../sidenavbar/sidenavbar.module';


@NgModule({
  declarations: [
    UserListComponent
  ],
  imports: [
    CommonModule,
    UserListRoutingModule,
    AdminModule,
    SidenavbarModule
  ]
})
export class UserListModule { }
