import { Component } from '@angular/core';
import { LottieComponent, AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-arrow',
  standalone: true,
  imports: [LottieComponent],
  templateUrl: './arrow.component.html',
  styleUrl: './arrow.component.css'
})
export class ArrowComponent {
  options: AnimationOptions = {
    path: 'assets/arrow2.json' ,
    

  };
}
