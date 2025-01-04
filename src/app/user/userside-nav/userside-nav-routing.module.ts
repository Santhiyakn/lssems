import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersideNavComponent } from './userside-nav.component';

const routes: Routes = [{ path: '', component: UsersideNavComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersideNavRoutingModule { }
