import { Component, OnInit } from '@angular/core';
import { MyService } from '../../my-service.service';

@Component({
  selector: 'app-info-page',
  templateUrl: './info-page.component.html',
  styleUrl: './info-page.component.scss'
})
export class InfoPageComponent implements OnInit {
  constructor(private service:MyService){}

  isAbout:boolean=true;
  aboutUs:string='';
  contactUs:string='';

  ngOnInit(): void {
   
    this.isAbout=this.service.isAboutUsPage;
    this.aboutUs=this.service.aboutUs;
    this.contactUs=this.service.contactUs;
    

    
  }


}
