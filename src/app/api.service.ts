import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MyService } from './my-service.service';
import { AdminLogin, Enquire, FeedBack, GetServiceProvider, Pagination, Service, ServiceProvider, Sort, UpdateUser, User, UserLogin, UserLoginApiResponse, VerifyOtp } from './models';
interface ApiResponse {
  data: any;
  message: string;
  status: string;
}
@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private http: HttpClient, private service: MyService) { }

  private adminLoginUrl = "https://local-service-search-engine-1.onrender.com/api/admin/login";



  private updateServiceUrl = "https://local-service-search-engine-1.onrender.com/api/admin/update/service";

  private getserviceUrl = "https://local-service-search-engine-1.onrender.com/api/get/service";

  private createServiceUrl = "https://local-service-search-engine-1.onrender.com/api/admin/create/service";

  private deleteServcieUrl = "https://local-service-search-engine-1.onrender.com/api/admin/delete/service";

  private getServiceProviderUrl = "https://local-service-search-engine-1.onrender.com/api/get/serviceProvider";

  private createServiceProviderUrl = "https://local-service-search-engine-1.onrender.com/api/admin/create/serviceProvider"

  private deleteServiceProvideUrl = "https://local-service-search-engine-1.onrender.com/api/admin/delete/serviceProvider"

  private updateServiceProviderUrl = "https://local-service-search-engine-1.onrender.com/api/admin/update/serviceProvider"

  private getUsersUrl = "https://local-service-search-engine-1.onrender.com/api/admin/user/get";

  private getUserUrl = "https://local-service-search-engine-1.onrender.com/api/user/get"

  private deleteUserUrl = "https://local-service-search-engine-1.onrender.com/api/admin/user/delete";

  private getServcieProviderFeedBack = "https://local-service-search-engine-1.onrender.com/api/serviceProvider/get/feedback"

  private deleteServiceProviderFeedBack = "https://local-service-search-engine-1.onrender.com/api/admin/delete/feedback"

  private userSignUpUrl = "https://local-service-search-engine-1.onrender.com/api/user/signUp";

  private userLogInUrl = "https://local-service-search-engine-1.onrender.com/api/user/login";

  private verifyOtpUrl = "https://local-service-search-engine-1.onrender.com/api/user/verfiy/Otp";

  private updateUserUrl = "https://local-service-search-engine-1.onrender.com/api/user/update";

  private logOutUrl = "https://local-service-search-engine-1.onrender.com/api/user/logout";

  private enquireUrl = "https://local-service-search-engine-1.onrender.com/api/user/enquire";

  private feedBackUrl = "https://local-service-search-engine-1.onrender.com/api/user/feedback";

  private getUserNameUrl ="https://local-service-search-engine-1.onrender.com/api/user/name/get";

  private getUserFeedBackUrl="https://local-service-search-engine-1.onrender.com/api/user/get/feedback"

  adminLogin(data: AdminLogin): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.adminLoginUrl, data);
  }

  getServices(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.getserviceUrl);
  }

  getService(id: string): Observable<ApiResponse> {
    const params = new HttpParams().set('id', id);
    return this.http.get<ApiResponse>(this.getserviceUrl, { params });
  }


  createService(data: Service): Observable<ApiResponse> {
    let headers = new HttpHeaders().set('Authorization', `Bearer ${this.service.token}`);
    return this.http.post<ApiResponse>(this.createServiceUrl, data, { headers });
  }

  updateService(id: string, data: Service): Observable<ApiResponse> {
    const params = new HttpParams().set('id', id);
    let headers = new HttpHeaders().set('Authorization', `Bearer ${this.service.token}`);
    return this.http.patch<ApiResponse>(this.updateServiceUrl, data, { params, headers });
  }

  deleteService(id: string): Observable<ApiResponse> {
    const params = new HttpParams().set('id', id);
    let headers = new HttpHeaders().set('Authorization', `Bearer ${this.service.token}`);

    return this.http.delete<ApiResponse>(this.deleteServcieUrl, { params, headers });

  }




  getServiceProviders(data: Pagination,sort:Sort): Observable<ApiResponse> {
    const headers = new HttpHeaders()
      .set('pageNumber', data.pageNumber)
      .set('pageSize', data.pageSize);
    const params = new HttpParams().set('sortBy', sort.sortBy).set('sortOrder', sort.sortOrder);
    console.log(params);
    return this.http.get<ApiResponse>(this.getServiceProviderUrl, { params, headers });
  }

  getServiceProvider(id: string): Observable<ApiResponse> {
    const params = new HttpParams().set('id', id);
    return this.http.get<ApiResponse>(this.getServiceProviderUrl, { params });
  }

  createServiceProvider(data: ServiceProvider): Observable<ApiResponse> {
    let headers = new HttpHeaders().set('Authorization', `Bearer ${this.service.token}`);
    return this.http.post<ApiResponse>(this.createServiceProviderUrl, data, { headers });
  }

  deleteServiceProvider(id: string): Observable<ApiResponse> {
    const params = new HttpParams().set('id', id);
    let headers = new HttpHeaders().set('Authorization', `Bearer ${this.service.token}`);
    return this.http.delete<ApiResponse>(this.deleteServiceProvideUrl, { params, headers });
  }

  updateServiceProvider(id: string, data: GetServiceProvider): Observable<ApiResponse> {
    const params = new HttpParams().set('id', id);
    let headers = new HttpHeaders().set('Authorization', `Bearer ${this.service.token}`);
    return this.http.patch<ApiResponse>(this.updateServiceProviderUrl, data, { params, headers });
  }

  getUsers(): Observable<ApiResponse> {
    let headers = new HttpHeaders().set('Authorization', `Bearer ${this.service.token}`);
    console.log(headers);
    return this.http.get<ApiResponse>(this.getUsersUrl, { headers });
  }
  getUser(id: string): Observable<ApiResponse> {
    const params = new HttpParams().set('id', id);
    let headers = new HttpHeaders().set('Authorization', `Bearer ${this.service.token}`);
    return this.http.get<ApiResponse>(this.getUsersUrl, { params, headers });
  }

  getUsername(id:string): Observable<ApiResponse>
  {
    
    const params = new HttpParams().set('id', id);
    console.log(params);
    let headers = new HttpHeaders().set('Authorization', `Bearer ${this.service.userToken}`);
    return this.http.get<ApiResponse>(this.getUserNameUrl, { params, headers });
  }
  getUsernameAdmin(id:string): Observable<ApiResponse>
  {
   
    const params = new HttpParams().set('id', id);
    console.log(params)
    let headers = new HttpHeaders().set('Authorization', `Bearer ${this.service.token}`);
    return this.http.get<ApiResponse>(this.getUserNameUrl, { params, headers });
  }
  getUserDetail(id: string): Observable<ApiResponse> {
    const params = new HttpParams().set('id', id);
    let headers = new HttpHeaders().set('Authorization', `Bearer ${this.service.userToken}`);

    return this.http.get<ApiResponse>(this.getUserUrl, { params, headers });
  }

  deleteUser(id: string): Observable<ApiResponse> {
    const params = new HttpParams().set('id', id);
    let headers = new HttpHeaders().set('Authorization', `Bearer ${this.service.token}`);
    return this.http.delete<ApiResponse>(this.deleteUserUrl, { params, headers });
  }

  getServiceProviderFeedBack(id: string): Observable<ApiResponse> {
    const params = new HttpParams().set('id', id);
    return this.http.get<ApiResponse>(this.getServcieProviderFeedBack, { params });
  }

  delServiceProviderFeedBack(id: string): Observable<ApiResponse> {
    const params = new HttpParams().set('id', id);
    let headers = new HttpHeaders().set('Authorization', `Bearer ${this.service.token}`);
    return this.http.delete<ApiResponse>(this.deleteServiceProviderFeedBack, { params, headers });
  }

  signupUser(data: User): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.userSignUpUrl, data);
  }

  loginUser(data: UserLogin): Observable<UserLoginApiResponse> {
    return this.http.post<UserLoginApiResponse>(this.userLogInUrl, data);
  }

  verifyUserOtp(data: VerifyOtp): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.verifyOtpUrl, data);
  }

  updateUser(id: string, data: UpdateUser): Observable<ApiResponse> {
    const params = new HttpParams().set('id', id);
    let headers = new HttpHeaders().set('Authorization', `Bearer ${this.service.userToken}`);
    return this.http.post<ApiResponse>(this.updateUserUrl, data, { params, headers });
  }

  logOut(): Observable<ApiResponse> {
    let headers = new HttpHeaders().set('Authorization', `Bearer ${this.service.userToken}`);
    return this.http.post<ApiResponse>(this.logOutUrl, {}, { headers });
  }

  userEnquire(data: Enquire): Observable<ApiResponse> {
    let headers = new HttpHeaders().set('Authorization', `Bearer ${this.service.userToken}`);
    return this.http.post<ApiResponse>(this.enquireUrl, data, { headers });
  }

  userFeedBack(data: FeedBack): Observable<ApiResponse> {
    let headers = new HttpHeaders().set('Authorization', `Bearer ${this.service.userToken}`);
    return this.http.post<ApiResponse>(this.feedBackUrl, data, { headers });
  }

  getUserFeedBack(id:string): Observable<ApiResponse>
  {
    const params = new HttpParams().set('id', id);
    let headers = new HttpHeaders().set('Authorization', `Bearer ${this.service.userToken}`);
    return this.http.get<ApiResponse>(this.getUserFeedBackUrl, {params, headers });
  }










}
