import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';
import { AdminModule } from '../admin.module';
import { SidenavbarModule } from '../sidenavbar/sidenavbar.module';
import { CategoryChangeModule } from './category-change/category-change.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CategoriesComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    AdminModule,
    SidenavbarModule,
    CategoryChangeModule,
    ReactiveFormsModule
  ]
})
export class CategoriesModule { }
