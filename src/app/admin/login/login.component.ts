
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';
import { MyService } from '../../my-service.service';
import { AdminLogin } from '../../models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private router: Router, private apiService: ApiService, private service: MyService) { }

  private isForgetPassword: boolean = false;
  isSubmitted: boolean = false;
  adminIdERR: string = '';
  passwordERR: string = '';
  stupidformcheck: string = '';
  email: string = '';
  password: string = '';
  data: Array<string> = [];


  adminloginForm = new FormGroup({
    adminId: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    forgetPassword: new FormControl('',)
  })

  onSubmit() {
    try {

      if (this.adminloginForm.value.adminId != null && this.adminloginForm.value.adminId != undefined) {
        this.email = this.adminloginForm.value.adminId;
      }
      if (this.adminloginForm.value.password != null && this.adminloginForm.value.password != undefined) {
        this.password = this.adminloginForm.value.password;
      }

      const admin: AdminLogin = {
        email: this.email,
        password: this.password
      }
      this.apiService.adminLogin(admin).subscribe(
        (response) => {
          this.data = response.data;
          console.log(this.data);
          this.service.token = this.data[0];
          this.router.navigateByUrl('/admin/dashboard');
        },
        (error) => {
          alert(error.error.message);
          console.log(error);
        })
    } catch (error) {
      console.log(error);
    }

  }


  // forgetPassword() {
  //   try {
  //     if (this.isForgetPassword) {
  //       this.isForgetPassword = false;
  //     }
  //     else {
  //       this.isForgetPassword = true;
  //     }
  //   }
  //   catch (error) {
  //     console.log(error);
  //   }
  //   // console.log(this.isForgetPassword);
  // }

  // isForget():boolean{
  //   try{
  
  //     let answer = this.isForgetPassword;
  //     return answer;
  //   }
  //   catch (error) {
  //     console.log(error);
  //   }
  // }




}
