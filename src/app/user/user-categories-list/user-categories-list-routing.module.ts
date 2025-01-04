import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserCategoriesListComponent } from './user-categories-list.component';

const routes: Routes = [{ path: '', component: UserCategoriesListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserCategoriesListRoutingModule { }
