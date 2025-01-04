import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersideNavRoutingModule } from './userside-nav-routing.module';
import { UsersideNavComponent } from './userside-nav.component';
import { SidenavbarComponent } from '../../admin/sidenavbar/sidenavbar.component';


@NgModule({
  declarations: [
    UsersideNavComponent
  ],
  imports: [
    CommonModule,
    UsersideNavRoutingModule
  ],
  exports:[
    UsersideNavComponent
  ]
})
export class UsersideNavModule { }
