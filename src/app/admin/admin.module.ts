import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SidenavbarModule } from './sidenavbar/sidenavbar.module';




@NgModule({
  declarations: [
    AdminComponent
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SidenavbarModule
    
  ],
  exports:[
    AdminComponent
  ]

  
})
export class AdminModule {
  
}
