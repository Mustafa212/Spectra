import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { HomeMainComponent } from "../_lottie/home-main/home-main.component";
import AOS from 'aos';
import { MemberCardComponent } from "../members/member-card/member-card.component";
import { MemberListComponent } from "../members/member-list/member-list.component";
import { ArrowComponent } from "../_lottie/arrow/arrow.component";
import { ActivatedRoute, RouterLink } from '@angular/router';




@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeMainComponent, MemberCardComponent, MemberListComponent, ArrowComponent , RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit,AfterViewInit {

  private route = inject(ActivatedRoute)
  ngAfterViewInit(): void {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        document.querySelector('#' + fragment)?.scrollIntoView();
      }
    });  
  }

  ngOnInit(): void {
    AOS.init();
    
  }

}
