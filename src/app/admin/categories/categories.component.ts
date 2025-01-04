import { Component, OnInit } from '@angular/core';
import { MyService } from '../../my-service.service';
import { ApiService } from '../../api.service';
import { GetService, Service } from '../../models';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent implements OnInit {
  constructor(private service: MyService, private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) { }


  services: Array<GetService> = [];

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      (params) => {
        if (params['isCreated']) {
          alert('Created successfully')
          this.getAllServices();
        }
        if (params['isCreated'] == false) {
          alert('Please provide valid information for creating service')
          this.getAllServices();

        }
      }
    );
    this.route.queryParams.subscribe(
      (params) => {
        if (params['isUpdated']) {
          alert('Updated successfully')
          this.getAllServices();
        }
        if (params['isUpdated'] == false) {
          alert('Please provide valid information for updating service')
          this.getAllServices();

        }
      }
    );

    this.getAllServices();

  }

  create() {
    try {
      this.service.iscreated = true;
      console.log("true");
    } catch (error) {
      console.log(error);
    }

  }
  update() {
    try {


      this.service.iscreated = false;

      console.log("false");
    }
    catch (error) {
      console.log(error);
    }
  }
  getAllServices() {
    try {
      this.apiService.getServices().subscribe(
        (response) => {

          this.services = response.data;
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




  deleteService(id: string) {
    try {
      console.log(id);
      this.showAlert('Are you sure you want to delete');
      this.apiService.deleteService(id).subscribe(
        (response) => {
          console.log(response.status);
        },
        (error) => {
          alert('Deletion failed');
          console.log(error);
        }
      )
      alert('Deleted successfully');
      this.getAllServices();


    }
    catch (error) {
      alert('Deletion failed');
      console.log(error);
    }
  }

  showAlert(message: string) {
    alert(message);
  }


}
