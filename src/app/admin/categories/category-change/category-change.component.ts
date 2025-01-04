import { Component, Input, OnInit } from '@angular/core';
import { MyService } from '../../../my-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../../api.service';
import { ApiResponse, GetService, Service } from '../../../models';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-category-change',
  templateUrl: './category-change.component.html',
  styleUrl: './category-change.component.scss'
})
export class CategoryChangeComponent implements OnInit {
  constructor(private service: MyService,
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router) { }
  isCreatePage: boolean = true;
  getOneService: Array<GetService> = [];
  createServiceData: Service = {
    name: ''
  };
  result: any;
  updateServiceName: string = '';

  serviceCreateForm = new FormGroup({
    serviceName: new FormControl('', Validators.required),

  })

  ngOnInit(): void {
    // console.log('Hello');
    this.isCreatePage = this.service.iscreated;
    if (!this.service.iscreated) {
      this.getService();

    }
  }




  createService() {
    try {
      console.log('Create service');
      if (this.serviceCreateForm.value.serviceName != null
        && this.serviceCreateForm.value.serviceName != undefined) {
        this.createServiceData.name = this.serviceCreateForm.value.serviceName;
      }
      this.apiService.createService(this.createServiceData).subscribe(
        (response) => {
          this.result = response;
          console.log(this.result);
        },
        (error) => {
          this.router.navigate(['/admin/categories'], { queryParams: { isCreated: 'false' } })
          console.log(error);

        }
      )
      this.router.navigate(['/admin/categories'], { queryParams: { isCreated: 'true' } })

    }
    catch (error) {
      this.router.navigate(['/admin/categories'], { queryParams: { isCreated: 'false' } })
      console.log(error);
    }

  }

  getService() {
    try {
      console.log('getSevice');
      let id: string = '';
      const paramsid = this.route.snapshot.queryParamMap.get('id');
      if (paramsid != null) {
        id = paramsid;
      }

      this.apiService.getService(id).subscribe(
        (response) => {

          this.getOneService = response.data;
          this.updateServiceName = this.getOneService[0].name;
          console.log(this.updateServiceName);


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


  updateService() {
    try {
      const data: Service = {
        name: this.updateServiceName
      }
      let id: string = '';
      const paramsid = this.route.snapshot.queryParamMap.get('id');
      if (paramsid != null) {
        id = paramsid;
      }
      this.apiService.updateService(id, data).subscribe(
        (response) => {
          console.log(response.status);
        },
        (error) => {
          this.router.navigate(['/admin/categories'], { queryParams: { isUpdated: 'false' } })
          console.log(error);

        }

      )
      this.router.navigate(['/admin/categories'], { queryParams: { isUpdated: 'true' } })


    }
    catch (error) {
      this.router.navigate(['/admin/categories'], { queryParams: { isUpdated: 'false' } })

      console.log(error);
    }
  }












}
