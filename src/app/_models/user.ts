export interface User{
    avatar:string,
    first_name:string, 
    last_name:string, 
    id:number,
    email:string
}


export interface theResponse {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: User[];
    support: {
      url: string;
      text: string;
    };
}


export interface nastyresponse {
  data: User[];
  support: {
    url: string;
    text: string;
  };
}