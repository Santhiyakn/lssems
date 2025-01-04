import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { GetUser } from '../../models';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit {
  constructor(private apiService: ApiService) { }
  users: Array<GetUser> = []

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    try {
      this.apiService.getUsers().subscribe(
        (response) => {
          console.log(response)
          this.users = response.data;
        },
        (error) => {
          console.log(error)
        }
      )
    } catch (error) {
      console.log(error)
    }
  }
  deleteUser(id: string) {
    try {
      alert('Are you sure you want to delete the user?');
      this.apiService.deleteUser(id).subscribe(
        (response) => {
          console.log(response)

        },
        (error) => {
          console.log(error);
          alert('Deleted Failed');

        }
      )
      alert('Deleted successfully');
      this.getUsers();
    }
    catch (error) {
      console.log(error)
    }
  }

}
