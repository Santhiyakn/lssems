import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Pagination, Sort } from '../../models';
interface ApiResponse {
  data: any[];  
  message: string;
  status: string;
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  categoriesCount: number | undefined;
  personCount: number | undefined;
  serviceData: any;
  serviceProviderData:any;
  ngOnInit(): void {
    this.fetchData();

  }

  fetchData() {
    try{
    this.apiService.getServices().subscribe((response:ApiResponse) => {
      this.serviceData = response.data;
      console.log(this.serviceData);
      this.categoriesCount=this.serviceData.length;
    },
      (error:any) => {
        console.log(error);
      })
      const pagination:Pagination={
        pageNumber:'0',
        pageSize:'0'
      }
       const sort:Sort={
              sortBy:'companyName',
              sortOrder:'asce'
            }

      this.apiService.getServiceProviders(pagination,sort).subscribe(
        (response)=>{
         this.serviceProviderData=response.data;
         this.personCount=this.serviceProviderData.length;
        },
        (error:any) => {
          console.log(error);
        }
      )
    }
    catch(error)
    {
      console.log(error);
    }
  }

 



  


}
