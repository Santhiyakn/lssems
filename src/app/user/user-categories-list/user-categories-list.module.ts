import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserCategoriesListRoutingModule } from './user-categories-list-routing.module';
import { UserCategoriesListComponent } from './user-categories-list.component';
import { UsersideNavModule } from '../userside-nav/userside-nav.module';


@NgModule({
  declarations: [
    UserCategoriesListComponent
  ],
  imports: [
    CommonModule,
    UserCategoriesListRoutingModule,
    UsersideNavModule
  ]
})
export class UserCategoriesListModule { }
