import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserCompaniesListComponent } from './user-companies-list.component';

const routes: Routes = [{ path: '', component: UserCompaniesListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserCompaniesListRoutingModule { }
