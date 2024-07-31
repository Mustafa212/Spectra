import { Component, OnInit } from '@angular/core';
import { LottieComponent, AnimationOptions } from 'ngx-lottie';



@Component({
  selector: 'app-home-main',
  standalone: true,
  imports: [LottieComponent],
  templateUrl: './home-main.component.html',
  styleUrl: './home-main.component.css'
})
export class HomeMainComponent {
 
  options: AnimationOptions = {
    path: 'assets/main.json' ,
    loop:false,

  };

}
