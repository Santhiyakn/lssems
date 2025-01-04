import { Component } from '@angular/core';
import { MyService } from '../../my-service.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.scss'
})
export class PagesComponent {
  contactUs:string='';
  aboutUs:string='';

  constructor(private servcie:MyService,private router:Router) {
    
  }

  addInfo(){
    try{
    this.servcie.aboutUs=this.aboutUs;
    this.servcie.contactUs=this.contactUs;
    console.log(this.servcie.aboutUs,"about us");

    alert('Pages Infomation added');

    }catch(error)
    {
      console.log(error);
    }

  }
  
}
