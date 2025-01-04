import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidenavbarRoutingModule } from './sidenavbar-routing.module';
import { SidenavbarComponent } from './sidenavbar.component';


@NgModule({
  declarations: [
    SidenavbarComponent
  ],
  imports: [
    CommonModule,
    SidenavbarRoutingModule
  ],
  exports:[
    SidenavbarComponent
    
  ]
})
export class SidenavbarModule { }
