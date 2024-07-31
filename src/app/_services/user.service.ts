import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../../environment/environment';
import { nastyresponse, theResponse, User } from '../_models/user';
import { PaginatedResult , Pagination } from '../_models/Pagination';
import { UserParams } from '../_models/UserParams';
import { map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private http = inject(HttpClient);
  baseurl = environment.apiUrl;

  paginatedResult = signal<PaginatedResult<User[]>|null>(null)

  pagination:Pagination={
    page: 1,
    per_page: 0,
    total: 0,
    total_pages: 0
  }
  getMembers(userparams:UserParams){

    let params = this.setPaginationHeaders(userparams.pageNumber)
    return this.http.get<theResponse>(this.baseurl,{params})
    .subscribe({
      next:(response)=>{

        this.pagination.page = response.page
        this.pagination.per_page = response.per_page
        this.pagination.total = response.total
        this.pagination.total_pages = response.total_pages

        this.paginatedResult.set({
          items:response.data ,
          pagintaion:  this.pagination
        })
      }
    }
    )

  }
  getMember(id: number) {
    const member = this.paginatedResult()?.items?.find(x=>x.id === id)
    if (member !== undefined) {
      return of(member)
    }
    return this.http.get<User>(this.baseurl+'/'+ id)
  }

  private setPaginationHeaders(page?:number){
    
    let params= new HttpParams()

    if (page !== undefined) {
      params = params.append("page" , page.toString())
    }
    return params

  }



}
