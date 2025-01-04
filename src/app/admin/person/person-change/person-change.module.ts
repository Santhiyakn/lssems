import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonChangeRoutingModule } from './person-change-routing.module';
import { PersonChangeComponent } from './person-change.component';
import { SidenavbarModule } from '../../sidenavbar/sidenavbar.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PersonChangeComponent
  ],
  imports: [
    CommonModule,
    PersonChangeRoutingModule,
    SidenavbarModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[PersonChangeComponent]
})
export class PersonChangeModule { }
