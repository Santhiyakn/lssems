import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserCompaniesListRoutingModule } from './user-companies-list-routing.module';


import { FormsModule } from '@angular/forms';


import { UsersideNavModule } from '../userside-nav/userside-nav.module';
import { UserCompaniesListComponent } from './user-companies-list.component';


@NgModule({
  declarations: [
    UserCompaniesListComponent
    
  ],
  imports: [
    CommonModule,
    UserCompaniesListRoutingModule,
    UsersideNavModule,
    FormsModule
  ]
})
export class UserCompaniesListModule { }
