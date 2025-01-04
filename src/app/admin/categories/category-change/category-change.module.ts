import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryChangeRoutingModule } from './category-change-routing.module';
import { CategoryChangeComponent } from './category-change.component';
import { SidenavbarModule } from '../../sidenavbar/sidenavbar.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CategoryChangeComponent
  ],
  imports: [
    CommonModule,
    CategoryChangeRoutingModule,
    SidenavbarModule,
    ReactiveFormsModule,
    FormsModule

  ],
  exports:[
    CategoryChangeComponent
  ]
})
export class CategoryChangeModule { }
