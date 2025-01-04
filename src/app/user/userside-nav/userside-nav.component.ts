import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { MyService } from '../../my-service.service';

@Component({
  selector: 'app-userside-nav',
  templateUrl: './userside-nav.component.html',
  styleUrl: './userside-nav.component.scss'
})
export class UsersideNavComponent {
  constructor(private apiService: ApiService, private service: MyService) { }
  logOut() {
    try {
      // console.log('logout');
      // console.log(this.service.userToken)
      try {
        this.apiService.logOut().subscribe(
          (response) => {
            console.log(response);
          },
          (error) => {
            console.log(error);
          }
        )
      }
      catch (error) {
        console.log(error);
      }
    }
    catch (error) {
      console.log(error);
    }
  }

  aboutUs()
  {
    try{
      this.service.isAboutUsPage=true;

    }
    catch (error) {
      console.log(error);
    }
  }

  contactUs()
  {
    try{
      this.service.isAboutUsPage=false;

    }
    catch (error) {
      console.log(error);
    }

  }


}
