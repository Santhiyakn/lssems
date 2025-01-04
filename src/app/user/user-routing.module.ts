import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { LoginComponent } from '../admin/login/login.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./user-login/user-login.module')
      .then(m => m.UserLoginModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./sign-up/sign-up.module')
      .then(m => m.SignUpModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./user-login/user-login.module')
      .then(m => m.UserLoginModule)
  },
  {
    path: 'usersideNav',
    loadChildren: () => import('./userside-nav/userside-nav.module')
      .then(m => m.UsersideNavModule)
  },
  {
    path: 'categories',
    loadChildren: () => import('./user-categories-list/user-categories-list.module')
      .then(m => m.UserCategoriesListModule)
  },
  {
    path: 'companies',
    loadChildren: () => import('./user-companies-list/user-companies-list.module')
      .then(m => m.UserCompaniesListModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./user-profile/user-profile.module')
      .then(m => m.UserProfileModule)
  },
  {
    path: 'company-profile',
    loadChildren: () => import('./company-profile/company-profile.module')
      .then(m => m.CompanyProfileModule)
  },
  {
    path: 'enquire',
    loadChildren: () => import('./enquire/enquire.module')
      .then(m => m.EnquireModule)
  },
  {
    path: 'feedback',
    loadChildren: () => import('./feedback/feedback.module')
      .then(m => m.FeedbackModule)
  },
  {
    path: 'contact-us',
    loadChildren: () => import('./info-page/info-page.module')
      .then(m => m.InfoPageModule)
  },
  {
    path: 'about-us',
    loadChildren: () => import('./info-page/info-page.module')
      .then(m => m.InfoPageModule)
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
