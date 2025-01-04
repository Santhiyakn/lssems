import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonViewRoutingModule } from './person-view-routing.module';
import { PersonViewComponent } from './person-view.component';
import { SidenavbarModule } from '../../sidenavbar/sidenavbar.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PersonViewComponent
  ],
  imports: [
    CommonModule,
    PersonViewRoutingModule,
    SidenavbarModule,
    FormsModule
  ]
})
export class PersonViewModule { }
