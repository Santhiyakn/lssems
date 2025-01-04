export interface ApiResponse{
    status:string;
    message:string;
    data:[]
}

export interface Service{
    name:string;

}

export interface GetService{
    _id:string;
    name:string;
}

export interface AdminLogin
{
    email:string;
    password:string;
}

export interface GetServiceProvider{
    _id:string|undefined;
    companyName:string|undefined;
    serviceProviderName:string|undefined;
    phoneNumber:{phoneNumber:string|undefined};
    location:{country:string|undefined,state:string|undefined,city:string|undefined};
    locationAvailable:Array<string>|undefined;
    serviceType:string|undefined;
    serviceDescription:string|null|undefined;
    photo:{photo:string|undefined};
    email:string|undefined;
    website:{website:string|undefined};
}

export interface ServiceProvider{
    companyName:string|undefined;
    serviceProviderName:string|undefined;
    phoneNumber:{phoneNumber:string|undefined};
    location:{country:string|undefined,state:string|undefined,city:string|undefined};
    locationAvailable:Array<string>|undefined;
    serviceType:string|undefined;
    serviceDescription:string|null|undefined;
    photo:string|undefined;
    email:string|undefined;
    website:{website:string|undefined};
}


export interface GetUser{
    _id:string;
    role:string;
    name:string;
    email:string;
    phoneNumber:string;
    photo:string;
    isVerified:boolean;
    
}

export interface GetFeedBack{
    _id:string;
    userId:string;
    review:string;
    rating:number;
    
}

export interface User{
    name:string;
    email:string;
    password:string;
    phoneNumber:string;
}

export interface UserLogin{
    email:string;
    password:string;
}

export interface VerifyOtp{
    otp:string;
    email:string;
}

export interface UserLoginApiResponse{
    id:string;
    status:string;
    message:string;
    data:[];
    token:string;
}

export interface UpdateUser{
    name:string|undefined;
    phoneNumber:string|undefined;
    photo:string|undefined;
    password:string|undefined;

}

export interface Enquire
{
    userId:string;
    serviceProviderId:string;
    enquireQuestion:string;
}

export interface FeedBack{
    userId:string;
    serviceProviderId:string;
     rating:number;
      review:string;
}

export interface Pagination{
    pageNumber:string;
    pageSize:string;
}

export interface Sort{
    sortBy:string;
    sortOrder:string;
}


export interface GetUserFeedBack{
    _id:string;
    serviceProviderId:string;
    rating:number;
    review:string|undefined;

}