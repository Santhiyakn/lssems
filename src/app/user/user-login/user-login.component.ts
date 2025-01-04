import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';
import { MyService } from '../../my-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserLogin, UserLoginApiResponse } from '../../models';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.scss'
})
export class UserLoginComponent {
  constructor(private router: Router, private apiService: ApiService, private service: MyService) { }


  isSubmitted: boolean = false;

  email: string = '';
  password: string = '';
  data: Array<string> = [];
  getUserInfo: UserLoginApiResponse = {
    id: '',
    status: '',
    message: '',
    data: [],
    token: '',
  }


  userloginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),

  })

  onSubmit() {
    try {
      if (
        this.userloginForm.value.email != null &&
        this.userloginForm.value.email != undefined
      ) {
        this.email = this.userloginForm.value.email;
      }
      if (
        this.userloginForm.value.password != null &&
        this.userloginForm.value.password != undefined
      ) {
        this.password = this.userloginForm.value.password;
      }

      const user: UserLogin = {
        email: this.email,
        password: this.password
      }

      this.apiService.loginUser(user).subscribe(
        (response) => {
          console.log(response);
          if (response.status === 'success') {

            this.service.userToken = response.token;
            this.service.userId = response.id;

            this.router.navigate(['/user/companies']);
          }

        },
        (error) => {
          alert(error.error.message);
          console.log(error);
        }
      )
    }
    catch (error) {
      console.log(error);
    }


  }

}
