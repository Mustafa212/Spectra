import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../../_services/user.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../_models/user';
import { TabsModule } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-member-details',
  standalone: true,
  imports: [TabsModule],
  templateUrl: './member-details.component.html',
  styleUrl: './member-details.component.css'
})
export class MemberDetailsComponent implements OnInit{
 
  private userservice = inject(UserService)
  private router = inject(ActivatedRoute)
  member?:User;

  ngOnInit(): void {
    this.loadmember()
  }
  loadmember(){
    let idnum:number
    const id = this.router.snapshot.paramMap.get("id");
    if (id !== null) {
      idnum = parseInt(id, 10);
      if (!isNaN(idnum) ) {
        this.userservice.getMember(idnum).subscribe({
          next:member => {
           this.member = member
          }
        })
      }
      
      }
    }

    




}
