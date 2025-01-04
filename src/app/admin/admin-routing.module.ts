import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },

  {
    path: 'categories',
    loadChildren: () => import('./categories/categories.module').then(m => m.CategoriesModule)
  },

  {
    path: 'person',
    loadChildren: () => import('./person/person.module').then(m => m.PersonModule)
  },

  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
  },

  {
    path: 'userList',
    loadChildren: () => import('./user-list/user-list.module').then(m => m.UserListModule)
  },

  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },

  {
    path: 'sidenavbar',
    loadChildren: () => import('./sidenavbar/sidenavbar.module').then(m => m.SidenavbarModule)
  },
 

 



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
