import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnquireComponent } from './enquire.component';

const routes: Routes = [{ path: '', component: EnquireComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnquireRoutingModule { }
