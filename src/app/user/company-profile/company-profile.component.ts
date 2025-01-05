import { Component, OnInit } from '@angular/core';
import { MyService } from '../../my-service.service';
import { ApiService } from '../../api.service';
import { ActivatedRoute } from '@angular/router';
import { GetFeedBack, GetService, GetServiceProvider, GetUser } from '../../models';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrl: './company-profile.component.scss'
})
export class CompanyProfileComponent implements OnInit {
  constructor(private apiService: ApiService, private service: MyService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    try {
      this.getCompanyDetails();
      this.getFeedBack();
    } catch (error) {
      console.log(error)
    }

  }
  companyId: string = '';
  serviceTypeName:string='';
services: Array<GetService> = [];
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

  feedBacks: Array<GetFeedBack> = [];

  getCompanyDetails() {
    try {
      const parmasId = this.route.snapshot.queryParamMap.get('id');
      if (parmasId != null) {
        this.companyId = parmasId;
        console.log(this.companyId);
      }
      this.apiService.getServiceProvider(this.companyId).subscribe(
        (response) => {
          this.company = response.data[0];
          this.getService(this.company.serviceType);
          console.log(this.company.serviceType);
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
  getFeedBack() {
    try {
      this.apiService.getServiceProviderFeedBack(this.companyId).subscribe(
        (response) => {
          this.feedBacks = response.data;
          console.log(this.feedBacks)

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


  getService(paramsId:string|undefined) {
    try {
      let id = '';
      if (paramsId) {
        id = paramsId
      }
      this.apiService.getServices().subscribe(
        (response) => {
          this.services = response.data;
          for (let service of this.services) {
            
            if (service._id === id) {
              this.serviceTypeName = service.name;
              // console.log(this.serviceTypeName)
            }
          }
        }
      )
      
     

    } catch (error) {
      console.log(error);
    }
  }

  //  getUserName(paramsid:string|undefined)
  //  {
  //   let username:string='';
  //    let id:string='';
  //   //  67780d418b573353a463562c
  //    if(paramsid)
  //    {
  //      id=paramsid;
  //    }

  //    this.apiService.getUsername(id).subscribe(
  //      (response)=>{
  //        username= response.data[0];
  //       console.log(username);
  //       return username;

  //      },
  //      (error)=>{
  //       return username;
  //      }
  //    )
  //  }

}
