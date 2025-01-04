import { Component, OnInit } from '@angular/core';
import { ApiResponse, GetFeedBack, GetServiceProvider, GetUser } from '../../../models';
import { ApiService } from '../../../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-person-view',
  templateUrl: './person-view.component.html',
  styleUrl: './person-view.component.scss'
})
export class PersonViewComponent implements OnInit {
  constructor(private apiService: ApiService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getPersonDetails();
    this.getFeedBack();
  }

  personId: string = '';

  person: GetServiceProvider = {
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
    isVerified: true,

  }
  feedBacks: Array<GetFeedBack> = [];

  getPersonDetails() {
    try {
      const parmasId = this.route.snapshot.queryParamMap.get('id');
      if (parmasId != null) {
        this.personId = parmasId;
        console.log(this.personId);
      }
      this.apiService.getServiceProvider(this.personId).subscribe(
        (response) => {
          this.person = response.data[0];
        },
        (error) => {
          console.log(error);
        }
      )
    } catch (error) {
      console.log(error);
    }
  }
  getFeedBack() {
    try {
      this.apiService.getServiceProviderFeedBack(this.personId).subscribe(
        (response) => {
          this.feedBacks = response.data;
          console.log(this.feedBacks)

        },
        (error) => {
          console.log(error);
        }
      )
    } catch (error) {
      console.log(error);
    }
  }

  // getUserName(paramsid:string|undefined)
  // {
  //   let id:string='';
  //   let username:string='';

  //   if(paramsid)
  //   {
  //     id=paramsid;
  //   }

  //   this.apiService.getUsernameAdmin(id).subscribe(
  //     (response)=>{
  //       username= response.data[0];
  //       return username

  //     }
  //   )
  // }

  deleteFeedBack(paramsid: string | undefined) {
    let id: string = '';
    if (paramsid) {
      id = paramsid;
    }
    alert('Are you sure ypu want to delete this feedback?')
    this.apiService.delServiceProviderFeedBack(id).subscribe(
      (response) => {
        console.log(response.status);

      },
      (error) => {
        console.log(error);
      }
    )
    alert('Delete successfully')
    this.getFeedBack()
  }

}
