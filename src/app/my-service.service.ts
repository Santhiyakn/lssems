import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetServiceProvider } from './models';

@Injectable({
  providedIn: 'root'
})
export class MyService {

  constructor() { }
  iscreated:boolean=true;

  token:string='';

  personCreate:boolean=true;
  personView:boolean=false;

  aboutUs:string='';
  contactUs:string='';
  userToken:string='';
  userId:string='';

  isUpdateUser:boolean=false;

  ServiceProviders: Array<GetServiceProvider> = [];

  isAboutUsPage:boolean=false;
  


  
  


  


}
