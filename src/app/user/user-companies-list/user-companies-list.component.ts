import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { FeedBack, GetService, GetServiceProvider, Pagination, Sort } from '../../models';
import { firstValueFrom } from 'rxjs';
import { MyService } from '../../my-service.service';

@Component({
  selector: 'app-user-companies-list',
  templateUrl: './user-companies-list.component.html',
  styleUrl: './user-companies-list.component.scss'
})
export class UserCompaniesListComponent implements OnInit {

  constructor(
    private apiService: ApiService,
    private service: MyService
  ) { }
  filterByCompany: Array<GetServiceProvider> = [];
  isFilter: boolean = false;
  rating: number = 0;
  filterRating: number | string | null = ' ';
  filterService: string | null = ' ';
  filterCompanyName: string | null = null;
  filterData: Array<GetServiceProvider> = [];
  services: Array<GetService> = [];
  getServiceProviders: Array<GetServiceProvider> = [];
  getService: GetService = {
    _id: '',
    name: ''
  }
  serviceProvider: Array<GetServiceProvider> = [];
  totalPages: number = 3;
  pageSize: number = 10;
  currentPage: number = 1;
  pages: number[] = [];
  sortOrder: string = 'asce';
  sortColumn: string = 'companyName';

  ngOnInit(): void {
    try {
      this.getAllCompaines();
      this.generatePages()
      this.getCompaines();
      this.getServices();

    } catch (error) {
      console.log(error);
    }




  }


  generatePages(): void {
    try {
      this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
    } catch (error) {
      console.log(error);
    }
  }


  onPageClick(page: number): void {
    try {
      this.currentPage = page;
      this.getCompaines();
    } catch (error) {
      console.log(error);
    }

  }
  onSort(column: string): void {
    try {
      if (this.sortColumn === column) {
        // Toggle sort order if the same column is clicked
        this.sortOrder = this.sortOrder === 'asce' ? 'desc' : 'asce';
      } else {

        this.sortColumn = column;
        this.sortOrder = 'asce';
      }
      this.getCompaines();
    } catch (error) {
      console.log(error);
    }
    //  
  }


  getCompaines() {
    try {

      const pagination: Pagination = {
        pageNumber: this.currentPage.toString(),
        pageSize: '10'
      }
      const sort: Sort = {
        sortBy: this.sortColumn,
        sortOrder: this.sortOrder
      }

      this.apiService.getServiceProviders(pagination, sort).subscribe(
        (response) => {
          console.log(response.data);
          this.getServiceProviders = response.data;
          this.serviceProvider = response.data;


        }
      )
    } catch (error) {
      console.log(error);
    }
  }
  getAllCompaines() {

    try {
      const pagination: Pagination = {
        pageNumber: '0',
        pageSize: '0'
      }
      const sort: Sort = {
        sortBy: this.sortColumn,
        sortOrder: this.sortOrder
      }

      this.apiService.getServiceProviders(pagination, sort).subscribe(
        (response) => {
          console.log(response.data);
          this.service.ServiceProviders = response.data;


        }
      )
    } catch (error) {
      console.log(error);
    }
  }

  getServiceName(paramsId: string | undefined): any {
    try {
      let id = '';
      if (paramsId) {
        id = paramsId
      }
      let serviceName: string = '';

      for (let service of this.services) {
        if (service._id === id) {
          serviceName = service.name;
        }
      }
      console.log(serviceName);
      return serviceName;
    } catch (error) {
      console.log(error);
    }


  }

  toViewpage() {

  }

  getServices() {
    try {

      this.apiService.getServices().subscribe(
        (response) => {
          this.services = response.data;
        }
      )
    } catch (error) {
      console.log(error);
    }
  }
  nofilter() {
    try {
      this.getServiceProviders = this.serviceProvider;
    } catch (error) {
      console.log(error);
    }
  }

  isFilterData() {
    try {
      this.isFilter = true
    } catch (error) {
      console.log(error);
    }
  }

  async filter() {
    try {
      this.filterData = [];
      if (this.filterService == " " && this.filterRating == " ") {
        this.filterData = this.serviceProvider;
        console.log(this.filterData)

      }
      else {

        for (let serviceProvider of this.serviceProvider) {
          if (this.filterService != " " && serviceProvider.serviceType == this.filterService &&
            this.filterRating != " " && await this.getFeedBack(serviceProvider._id) == this.filterRating
          ) {

            this.filterData.push(serviceProvider)

          }
          else if (this.filterService != " " && serviceProvider.serviceType == this.filterService ||
            this.filterRating != " " && await this.getFeedBack(serviceProvider._id) == this.filterRating
          ) {
            this.filterData.push(serviceProvider)
          }

        }
        console.log(this.filterData)
        this.getServiceProviders = this.filterData;
      }
    } catch (error) {
      console.log(error);
    }

  }




  async getFeedBack(id: string | undefined): Promise<any> {
    try {
      let rating: number = 0;
      let calRating: number | undefined;
      let serviceProviderId: string = '';

      if (id) {
        serviceProviderId = id;
      }

      try {
        const response = await firstValueFrom(
          this.apiService.getServiceProviderFeedBack(serviceProviderId)
        );
        const getFeedBacks: Array<FeedBack> = response.data;
        calRating = this.companyRating(getFeedBacks);
        if (calRating != undefined) { rating = calRating; }
        console.log(rating);
        return rating;
      } catch (error) {
        console.error(error);
        throw error;
      }
    } catch (error) {
      console.log(error);
    }
  }

  // getReviewCount(id:string|undefined)
  // {
  //   let serviceProviderId: string = '';
  //   let reviewCount:number=0;

  //   if (id) {
  //     serviceProviderId = id;
  //   }
  //   this.apiService.getServiceProviderFeedBack(serviceProviderId).
  //   subscribe((response)=>{
  //     reviewCount=response.data.length;
  //     console.log(reviewCount);
  //     return reviewCount;
  //   })

  // }


  companyRating(feedBacks: Array<FeedBack>): any {
    try {
      if (feedBacks.length > 0) {
        let rating = 0;
        for (let feedBack of feedBacks) {
          rating += feedBack.rating;

        }
        rating = rating / feedBacks.length;
        console.log(rating);
        if (rating >= 0 && rating <= 1) rating = 1;
        else if (rating > 1 && rating <= 2) rating = 2;
        else if (rating > 2 && rating <= 3) rating = 3;
        else if (rating > 3 && rating <= 4) rating = 4;
        else if (rating > 4 && rating <= 5) rating = 5;
        console.log(rating);
        return rating

      } else {
        console.log("No feedbacks available to calculate the rating.");
      }
      return 0;
    }
    catch (error) {
      console.log(error)
    }
  }

  search() {
    try {
      this.filterByCompany = [];
      let searchWord: string = '';
      if (this.filterCompanyName != null) {
        searchWord = this.filterCompanyName;
      }
      for (let serviceProvider of this.serviceProvider) {
        if (serviceProvider.companyName) {
          if (this.searchWordInString(searchWord, serviceProvider.companyName)) {
            this.filterByCompany.push(serviceProvider);

          }
        }
      }
      this.getServiceProviders = this.filterByCompany;
      console.log(this.filterByCompany, "filterBucompany");
    }
    catch (error) {
      console.log(error)
    }

  }

  searchWordInString(word: string, str: string): any {
    try {
      return str.toLowerCase().includes(word.toLowerCase());
    }
    catch (error) {
      console.log(error)
    }
  }




}
