import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedbackRoutingModule } from './feedback-routing.module';
import { FeedbackComponent } from './feedback.component';
import { FormsModule } from '@angular/forms';
import { UsersideNavComponent } from '../userside-nav/userside-nav.component';
import { UsersideNavModule } from '../userside-nav/userside-nav.module';


@NgModule({
  declarations: [
    FeedbackComponent
  ],
  imports: [
    CommonModule,
    FeedbackRoutingModule,
    FormsModule,
    UsersideNavModule
  ]
})
export class FeedbackModule { }
