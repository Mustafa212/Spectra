import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusyService {
  private busySubject = new BehaviorSubject<boolean>(false);
  isBusy$ = this.busySubject.asObservable();
  busyServiceCount = 0;
  busy(){
    this.busyServiceCount++;
    this.busySubject.next(true);

  }
  idle(){
    this.busyServiceCount--;
    if (this.busyServiceCount <=0) {
      this.busyServiceCount = 0
      this.busySubject.next(false);


    }

  }
}
