import { Component } from '@angular/core';
import { MyService } from '../../my-service.service';
import { ApiService } from '../../api.service';
import { FeedBack } from '../../models';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.scss'
})
export class FeedbackComponent {
  constructor(private service: MyService,
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router) { }
  companyId: string | null = '';
  rating: number = 0;
  review: string = '';
  userFeedBack: FeedBack = {
    userId: '',
    serviceProviderId: '',
    rating: 0,
    review: ''
  }
  stars: number[] = [1, 2, 3, 4, 5];

  hoverRating: number = 0;

  feedBack() {
    try {
      this.userFeedBack.userId = this.service.userId;
      this.companyId = this.route.snapshot.queryParamMap.get('id')
      if (this.companyId) {
        this.userFeedBack.serviceProviderId = this.companyId;
      }



      this.userFeedBack.rating = this.rating;
      this.userFeedBack.review = this.review;
      console.log(this.userFeedBack)
      this.apiService.userFeedBack(this.userFeedBack).subscribe(
        (response) => {
          console.log(response);
          alert('Thanks for the feedBack..');
          this.router.navigateByUrl('user/companies');


        },
        (error) => {
          console.log(error);
        }
      )
    } catch (error) {
      console.log(error);
    }

  }


  highlightStars(rating: number): void {
    try {
      this.hoverRating = rating;
    } catch (error) {
      console.log(error);
    }
  }

  resetStars(): void {
    try {
      this.hoverRating = 0;
    } catch (error) {
      console.log(error);
    }
  }

  setRating(rating: number): void {
    try {
      this.rating = rating;
    } catch (error) {
      console.log(error);
    }
  }


}
