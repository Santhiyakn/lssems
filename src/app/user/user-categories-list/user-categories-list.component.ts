import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { GetService } from '../../models';

@Component({
  selector: 'app-user-categories-list',
  templateUrl: './user-categories-list.component.html',
  styleUrl: './user-categories-list.component.scss'
})
export class UserCategoriesListComponent implements OnInit {

  constructor(private apiService: ApiService) { }
  services: Array<GetService> = []

  ngOnInit(): void {
    try {
      this.getServices();
    } catch (error) {
      console.log(error);
    }
  }

  getServices() {
    try {
      this.apiService.getServices().subscribe(
        (response) => {
          this.services = response.data;

        },
        (error) => {
          console.log(error);
        }
      )
    } catch (error) {
      console.log(error);
    }
  }

}
