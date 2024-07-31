import { NgIf } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { BusyService } from '../_services/busy.service';

@Component({
  selector: 'app-progressbar',
  standalone: true,
  imports: [NgIf ,MatProgressBarModule],
  templateUrl: './progressbar.component.html',
  styleUrl: './progressbar.component.css'
})
export class ProgressbarComponent implements OnInit{
  isbusy=false
  busyService = inject(BusyService)
  ngOnInit() {
    this.busyService.isBusy$.subscribe(isBusy => {
      this.isbusy = isBusy;
    });
  }

}
