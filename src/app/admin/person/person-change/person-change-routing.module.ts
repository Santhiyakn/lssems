import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonChangeComponent } from './person-change.component';

const routes: Routes = [{ path: '', component: PersonChangeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonChangeRoutingModule { }
