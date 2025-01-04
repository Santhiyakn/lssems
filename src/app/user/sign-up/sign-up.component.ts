import { Component, OnInit } from '@angular/core';
import { ApiResponse, User, VerifyOtp } from '../../models';
import { ApiService } from '../../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent implements OnInit {
  constructor(
    private apiService: ApiService,
    private router: Router
  ) { }
  ngOnInit(): void {
    try {
      console.log(this.email);
      console.log(this.password);
    } catch (error) {
      console.log(error);
    }
  }

  name: string = '';
  email: string = '';
  phoneNumber: string = '';
  password: string = '';
  verifyPassword: string = '';
  newUser: User = {
    name: '',
    email: '',
    password: '',
    phoneNumber: '',

  }
  verifyOtp: VerifyOtp = {
    email: '',
    otp: '',
  }
  isVerifyEmail: boolean = false;

  otp: string = '';

  verifyEmail() {
    try {
      this.newUser.name = this.name;
      this.newUser.email = this.email;
      if (this.verifyPassword == this.password && this.password.length > 8 && this.password.length < 15) { this.newUser.password = this.password; }
      else {
        alert('Please provide a valid password');
      }
      if (this.phoneNumber.length == 10) {
        this.newUser.phoneNumber = this.phoneNumber;
      }
      else {
        alert('Please provide a valid phone number');

      }


      console.log(this.newUser);
      this.apiService.signupUser(this.newUser).subscribe(
        (response) => {
          if (response.status == 'success') {
            alert(`Verification mail send to ${this.newUser.email}`)
            this.isVerifyEmail = true;
          }
        },
        (error) => {
          console.log(error);
          alert('Verify email failed');

        })
    } catch (error) {
      console.log(error);
    }


  }

  signUp() {
    try {
      this.verifyOtp.email = this.email;
      this.verifyOtp.otp = this.otp;
      console.log(this.verifyOtp);
      this.apiService.verifyUserOtp(this.verifyOtp).subscribe(
        (response) => {
          console.log(response)

        },
        (error) => {
          console.log(error);
          alert('please provide valid info');
        }

      )
      alert('Sign Up successsfully');
      this.router.navigateByUrl('user/login');
    } catch (error) {
      console.log(error);
    }

  }

}
