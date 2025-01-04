import { Component, OnInit, provideExperimentalZonelessChangeDetection } from '@angular/core';
import { MyService } from '../../../my-service.service';
import { ApiService } from '../../../api.service';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { GetService, GetServiceProvider, ServiceProvider } from '../../../models';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-person-change',
  templateUrl: './person-change.component.html',
  styleUrl: './person-change.component.scss'
})
export class PersonChangeComponent implements OnInit {

  constructor(private servcie: MyService, private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }




  isCreatePage: Boolean = true;
  services: Array<GetService> = [];
  serviceId: string = '';
  updateId: string = '';
  locationAvailable: Array<string> = [];
  person: ServiceProvider = {
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
    photo: '',
    email: '',
    website: { website: '' },
    locationAvailable: []
  }
  geTperson: GetServiceProvider = {
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
  serviceType: string = '';

  updateCompanyName: string | undefined;
  updateserviceProviderName: string | undefined;
  updatephoneNumber: string | undefined;
  updatecity: string | undefined;
  updatestate: string | undefined;
  updatecountry: string | undefined;
  updateserviceType: string | undefined;
  updateserviceDescription: string | undefined | null;
  updatephoto: string | undefined;
  updatewebsite: string | undefined;
  updateEmail: string | undefined;




  ngOnInit(): void {

    this.isCreatePage = this.servcie.personCreate;
    this.getServices();
    if (!this.servcie.personCreate) {
      this.getPerson();

    }



  }



  createPersonForm = new FormGroup({
    companyName: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(25)]),
    serviceProviderName: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(25)]),
    phoneNumber: new FormControl('', [Validators.required, Validators.minLength(10)]),
    locationCity: new FormControl('', [Validators.required, Validators.minLength(1)]),
    locationState: new FormControl('', [Validators.required, Validators.minLength(1)]),
    locationCountry: new FormControl('', [Validators.required, Validators.minLength(1)]),
    serviceType: new FormControl('', [Validators.required, Validators.minLength(1)]),
    serviceDescription: new FormControl(' ', [Validators.maxLength(100)]),
    photo: new FormControl('', [Validators.required, Validators.minLength(1)]),
    email: new FormControl('', [Validators.required, Validators.minLength(1)]),
    website: new FormControl('', [Validators.required, Validators.minLength(1)]),
    locationsAvailable: new FormArray([]),


  })

  get locationsAvailable(): FormArray {
    return this.createPersonForm.get('locationsAvailable') as FormArray;
  }
  addItem(value: string = ''): void {
    try {
      this.locationsAvailable.insert(0, new FormControl(value));
    } catch (error) {
      console.log(error)
    }
  }
  removeItem(index: number): void {
    try {
      this.locationsAvailable.removeAt(index);
    } catch (error) {
      console.log(error)
    }
  }




  addLocationAvaiable(): any {
    try {
      if (this.createPersonForm.value.locationsAvailable) {
        for (const location of this.createPersonForm.value.locationsAvailable) {
          this.locationAvailable.push(location);
        }

      }
      return this.locationAvailable;
    } catch (error) {
      console.log(error)
    }

  }






  getServices() {
    try {
      this.apiService.getServices().subscribe(
        (response) => {
          this.services = response.data;
          console.log(this.servcie);

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



  createPerson() {
    try {
      this.person.companyName = this.validatePersonValue(this.createPersonForm.value.companyName);
      this.person.serviceProviderName = this.validatePersonValue(this.createPersonForm.value.serviceProviderName);
      this.person.serviceType = this.validatePersonValue(this.createPersonForm.value.serviceType);
      this.person.location.city = this.validatePersonValue(this.createPersonForm.value.locationCity);
      this.person.location.country = this.validatePersonValue(this.createPersonForm.value.locationCountry);
      this.person.location.state = this.validatePersonValue(this.createPersonForm.value.locationState);
      this.person.email = this.validatePersonValue(this.createPersonForm.value.email);
      this.person.locationAvailable = this.addLocationAvaiable();
      this.person.phoneNumber.phoneNumber = this.validatePersonValue(this.createPersonForm.value.phoneNumber);
      this.person.photo = this.validatePersonValue(this.createPersonForm.value.photo);
      this.person.website.website = this.validatePersonValue(this.createPersonForm.value.website);
      this.person.serviceDescription = this.validatePersonValue(this.createPersonForm.value.serviceDescription);



      this.apiService.createServiceProvider(this.person).subscribe(
        (response) => {
          console.log(response.status);
        },
        (error) => {
          this.router.navigate(['/admin/person'], { queryParams: { isCreated: 'false' } })
          console.log(error.message)
        }

      )

      this.router.navigate(['/admin/person'], { queryParams: { isCreated: 'true' } })


    }
    catch (error) {
      this.router.navigate(['/admin/person'], { queryParams: { isCreated: 'false' } })
      console.log(error);
    }

  }

  validatePersonValue(value: string | null | undefined): any {
    try {
      if (value != undefined && value != null) {
        const validatedValue: string = value;
        return validatedValue;
      }

      return ' ';
    }
    catch (error) {
      console.log(error)
    }

  }

  getPerson() {
    try {


      const parmasId = this.route.snapshot.queryParamMap.get('id');
      if (parmasId != null) {
        this.updateId = parmasId;
        console.log(this.updateId, "Update id in getPerson");
      }
      console.log(this.updateId, "Update id in getPerson");

      this.apiService.getServiceProvider(this.updateId).subscribe(
        (response) => {
          console.log(response.data, "Update person info");
          this.geTperson = response.data[0];

          this.updateCompanyName = this.geTperson.companyName;
          this.updateserviceProviderName = this.geTperson.serviceProviderName;
          this.updatephoneNumber = this.geTperson.phoneNumber.phoneNumber;
          this.updatecity = this.geTperson.location.city;
          this.updatestate = this.geTperson.location.state;
          this.updatecountry = this.geTperson.location.country;
          this.updateserviceType = this.geTperson.serviceType;
          this.updateserviceDescription = this.geTperson.serviceDescription;
          this.updatephoto = this.geTperson.photo.photo;
          this.updatewebsite = this.geTperson.website.website;
          this.updateEmail = this.geTperson.email;

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


  updatePerson() {
    try {

      this.geTperson.companyName = this.updateCompanyName;
      this.geTperson.serviceProviderName = this.updateserviceProviderName;
      this.geTperson.phoneNumber.phoneNumber = this.updatephoneNumber;
      this.geTperson.location.city = this.updatecity;
      this.geTperson.location.state = this.updatestate;
      this.geTperson.location.country = this.updatecountry;
      this.geTperson.website.website = this.updatewebsite;
      this.geTperson.photo.photo = this.updatephoto;
      this.geTperson.serviceDescription = this.updateserviceDescription;
      this.geTperson.serviceType = this.updateserviceType;
      this.geTperson.email = this.updateEmail;
      this.apiService.updateServiceProvider(this.updateId, this.geTperson).subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
          this.router.navigate(['/admin/person'], { queryParams: { isUpdated: 'false' } })
        }
      )
      this.router.navigate(['/admin/person'], { queryParams: { isUpdated: 'true' } })

    }
    catch (error) {
      this.router.navigate(['/admin/person'], { queryParams: { isUpdated: 'false' } })
      console.log(error);
    }



  }



}
