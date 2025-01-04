import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonComponent } from './person.component';

const routes: Routes = [
  { path: '', component: PersonComponent },
  {
    path: 'view',
    loadChildren: () => import('./person-view/person-view.module')
      .then(m => m.PersonViewModule)
  },
  {
    path: 'create',
    loadChildren: () => import('./person-change/person-change.module')
      .then(m => m.PersonChangeModule)
  },
  {
    path: 'update',
    loadChildren: () => import('./person-change/person-change.module')
      .then(m => m.PersonChangeModule)

  },
  {
    path: '**', component: PersonComponent
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonRoutingModule { }
