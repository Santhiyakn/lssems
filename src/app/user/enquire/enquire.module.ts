import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnquireRoutingModule } from './enquire-routing.module';
import { EnquireComponent } from './enquire.component';
import { FormsModule } from '@angular/forms';
import { UsersideNavComponent } from '../userside-nav/userside-nav.component';
import { UsersideNavModule } from '../userside-nav/userside-nav.module';


@NgModule({
  declarations: [
    EnquireComponent
  ],
  imports: [
    CommonModule,
    EnquireRoutingModule,
    FormsModule,
    UsersideNavModule
  ]
})
export class EnquireModule { }
