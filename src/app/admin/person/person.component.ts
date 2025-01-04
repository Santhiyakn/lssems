import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { GetService, GetServiceProvider, Pagination, Sort } from '../../models';
import { MyService } from '../../my-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrl: './person.component.scss'
})
export class PersonComponent implements OnInit {

  constructor(private apiService: ApiService,
    private service: MyService,
    private route: ActivatedRoute
  ) { }

  persons: Array<GetServiceProvider> = [];

  ngOnInit(): void {



    this.route.queryParams.subscribe(
      (params) => {
        if (params['isCreated']) {

          alert('Created successfully');
          this.getPersons();
        }
        if (params['isCreated'] == false) {
          alert('Please provide a valid information for creating person');
          this.getPersons();

        }
      }
    );
    this.route.queryParams.subscribe(
      (params) => {
        if (params['isUpdated']) {

          alert('Updated successfully');
          this.getPersons();
        }
        if (params['isUpdated'] == false) {
          alert('Please provide a valid information for updating person');
          this.getPersons();

        }
      }
    );

    this.getPersons();



  }

  createPerson() {
    try {
      this.service.personCreate = true;
    } catch (error) {
      console.log(error)
    }

  }
  updatePerson() {
    try {
      this.service.personCreate = false;
    }
    catch (error) {
      console.log(error)
    }
  }
  viewPerson() {
    try {
      this.service.personView = true;
    }
    catch (error) {
      console.log(error)
    }

  }

  deletePerson(paramsId: string | undefined) {
    alert('Are you sure you want to delete this person?');
    try {
      let id: string = '';
      if (paramsId != undefined && paramsId != null) {
        id = paramsId;
      }
      this.apiService.deleteServiceProvider(id).subscribe(
        (response) => {
          console.log(response.status);
        },
        (error) => {
          alert('Deletion failed')
          console.log(error);
        }
      )
      alert('deleted successfully');
      this.getPersons();
    }
    catch (error) {
      alert('Deletion failed')
      console.log(error);
    }
  }


  getPersons() {
    try {
      const pagination: Pagination = {
        pageNumber: '1',
        pageSize: '2'
      }
      const sort: Sort = {
        sortBy: 'companyName',
        sortOrder: 'asce'
      }
      this.apiService.getServiceProviders(pagination, sort).subscribe(
        (response) => {
          this.persons = response.data;
          console.log(this.persons);
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

}
