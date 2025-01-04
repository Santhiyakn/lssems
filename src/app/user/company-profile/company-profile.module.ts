import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyProfileRoutingModule } from './company-profile-routing.module';
import { CompanyProfileComponent } from './company-profile.component';
import { FormsModule } from '@angular/forms';
import { UsersideNavComponent } from '../userside-nav/userside-nav.component';
import { UsersideNavModule } from '../userside-nav/userside-nav.module';


@NgModule({
  declarations: [
    CompanyProfileComponent
  ],
  imports: [
    CommonModule,
    CompanyProfileRoutingModule,
    FormsModule,
    UsersideNavModule
  ]
})
export class CompanyProfileModule { }
