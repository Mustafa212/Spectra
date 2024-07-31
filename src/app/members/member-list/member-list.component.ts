import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../../_services/user.service';
import { MemberCardComponent } from '../member-card/member-card.component';
import { NgClass } from '@angular/common';
import { UserParams } from '../../_models/UserParams';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ProgressbarComponent } from "../../progressbar/progressbar.component";

@Component({
  selector: 'app-member-list',
  standalone: true,
  imports: [
    MemberCardComponent,
    NgClass,
    MatPaginatorModule,
    ReactiveFormsModule,
    ProgressbarComponent
],
  templateUrl: './member-list.component.html',
  styleUrl: './member-list.component.css',
})
export class MemberListComponent implements OnInit  {
  searchControl = new FormControl();


  userservice = inject(UserService);
  userparams = new UserParams();

  ngOnInit(): void {
    if (!this.userservice.paginatedResult()) {
      this.loadMembers();
    }

    this.searchControl.valueChanges.subscribe({
      next:value=>{
        value = parseInt(value)
        if (!isNaN(value)) {
          this.userservice.getMember(parseInt(value)).subscribe({
            next:(user)=>{
              this.userservice.paginatedResult.set({
                items:[user]
              })


            },
            error:error => console.log(error.error)
            
            

          })
        }
        else{
          this.loadMembers()
        }
        
        
      }
    })
  }



  loadMembers() {
    return this.userservice.getMembers(this.userparams);
  }
  pageChanged(event: any) {
    if (this.userparams.pageNumber != event.pageIndex + 1) {
      this.userparams.pageNumber = event.pageIndex + 1;
      this.loadMembers();
    }
  }
}
