import { Component } from '@angular/core';
import { MyService } from '../../my-service.service';
import { ApiService } from '../../api.service';
import { Enquire } from '../../models';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-enquire',
  templateUrl: './enquire.component.html',
  styleUrl: './enquire.component.scss'
})
export class EnquireComponent {
  constructor(private service: MyService, private apiService: ApiService, private route: ActivatedRoute,
    private router: Router
  ) { }
  id: string = '';
  question: string = '';
  userEnquire: Enquire = {
    userId: '',
    serviceProviderId: '',
    enquireQuestion: ''
  }

  enquire() {
    try {
      this.userEnquire.userId = this.service.userId;
      const parmasId = this.route.snapshot.queryParamMap.get('id');
      if (parmasId != null) {
        this.userEnquire.serviceProviderId = parmasId;
        this.id = parmasId;
      }
      this.userEnquire.enquireQuestion = this.question;
      this.apiService.userEnquire(this.userEnquire).subscribe(
        (response) => {
          console.log(response);
          alert('Enquire mail is send to the company..They will reach your email..');

          this.router.navigate(['/user/feedback'], { queryParams: { 'id': this.id } });

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
