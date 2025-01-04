import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { MyService } from '../../my-service.service';
import { GetServiceProvider, GetUser, GetUserFeedBack, UpdateUser } from '../../models';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent implements OnInit {
  constructor(private apiServcie: ApiService, private service: MyService) { }
  isUpdateUser: boolean = false;
  updatedPassword: string = '';
  company: GetServiceProvider = {
    _id: '',
    companyName: '',
    serviceProviderName: '',
    phoneNumber: { phoneNumber: '' },
    location: {
      city: '',
      state: '',
      country: ''
    },
    serviceType: '',
    serviceDescription: '',
    photo: { photo: '' },
    email: '',
    website: { website: '' },
    locationAvailable: []

  }
  user: GetUser = {
    _id: '',
    role: '',
    name: '',
    email: '',
    phoneNumber: '',
    photo: '',
    isVerified: false

  }
  updateUserInfo: UpdateUser = {
    name: '',
    phoneNumber: '',
    photo: '',
    password: ''

  }
  feedBacks: Array<GetUserFeedBack> = []
  ngOnInit(): void {
    try {
      this.isUpdateUser = this.service.isUpdateUser;
      this.getUserProfile()
      this.getUserFeedBacks()
    }
    catch (error) {
      console.log(error);
    }
  }
  getUserProfile() {
    try {
      console.log(this.service.userToken);
      const id: string = this.service.userId;
      this.apiServcie.getUserDetail(id).subscribe(
        (response) => {
          console.log(response.data[0]);
          this.user = response.data[0];
          this.updateUserInfo.name = this.user.name;
          this.updateUserInfo.phoneNumber = this.user.phoneNumber;
          this.updateUserInfo.photo = this.user.photo;
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
  toUpdateUser() {
    try {
      this.service.isUpdateUser = true;
      console.log(this.isUpdateUser);
      console.log(this.service.isUpdateUser);
      this.isUpdateUser = true;

    }
    catch (error) {
      console.log(error);
    }

  }
  updateUser() {
    try {
      if (this.updatedPassword != '') {
        this.updateUserInfo.password = this.updatedPassword
      }
      else {
        this.updateUserInfo.password = undefined;
      }
      const id: string = this.service.userId

      this.apiServcie.updateUser(id, this.updateUserInfo).subscribe(
        (response) => {
          console.log(response.status);

        },
        (error) => {
          console.log(error);
        }
      )
      alert('Updated user info success');
      this.getUserProfile()
    this.isUpdateUser=false

    }
    catch (error) {
      console.log(error);
    }

  }

  isUpdatedUser() {
    try {
      this.isUpdateUser = false;
    }
    catch (error) {
      console.log(error);
    }
  }

  getUserFeedBacks() {
    try {
      console.log(this.service.userId);
      this.apiServcie.getUserFeedBack(this.service.userId).subscribe(
        (response) => {
          console.log(response);
          this.feedBacks = response.data;
        }
        ,
        (error) => {
          console.log(error);
        }
      )
    }
    catch (error) {
      console.log(error);
    }


  }
  getServiceProviderName(paramsId: string | undefined): any {
    try {

      let id: string = '';
      if (paramsId) {
        id = paramsId
      }
      let serviceProvidername: string = 'Undefined';
      console.log(this.service.ServiceProviders)
      for (let serviceProvider of this.service.ServiceProviders) {
        console.log(serviceProvider._id, id);
        if (serviceProvider._id == id && serviceProvider.companyName) {

          serviceProvidername = serviceProvider.companyName
        }
      }
      return serviceProvidername;
    }
    catch (error) {
      console.log(error);
    }

  }

}
