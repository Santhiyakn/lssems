import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonRoutingModule } from './person-routing.module';
import { PersonComponent } from './person.component';
import { SidenavbarModule } from '../sidenavbar/sidenavbar.module';
import { PersonChangeModule } from './person-change/person-change.module';


@NgModule({
  declarations: [
    PersonComponent
  ],
  imports: [
    CommonModule,
    PersonRoutingModule,
    SidenavbarModule,
    PersonChangeModule,
    
  
  ]
})
export class PersonModule { }
