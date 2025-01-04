import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidenavbarComponent } from './sidenavbar.component';

const routes: Routes = [{ path: '', component: SidenavbarComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SidenavbarRoutingModule { }
