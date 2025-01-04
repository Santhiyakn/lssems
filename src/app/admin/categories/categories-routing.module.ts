import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories.component';

const routes: Routes = [
  {
    path: '',
    component: CategoriesComponent
  },
  {
    path: 'create',
    loadChildren: () => import('./category-change/category-change.module').then(m => m.CategoryChangeModule)
  },
  {
    path: 'update',
    loadChildren: () => import('./category-change/category-change.module').then(m => m.CategoryChangeModule)
  },
  {
    path: '**',
    component: CategoriesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
