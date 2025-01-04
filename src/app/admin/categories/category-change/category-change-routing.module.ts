import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryChangeComponent } from './category-change.component';

const routes: Routes = [{ path: '', component: CategoryChangeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryChangeRoutingModule { }
