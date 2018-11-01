import { Injectable } from '@angular/core';
import * as Rx from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DrivingService {

  public sharedValue: string = "NOT SET YET"
  public carType: string = "NOT SET YET";
  public driverName: string = "NOT SET YET";

  private messageSource = new Rx.BehaviorSubject<string>('')
  currentMessage = this.messageSource.asObservable();

  constructor() {}

  publishMessage(updatedDriverName: string){
      this.driverName = updatedDriverName
      this.messageSource.next(updatedDriverName)
  }
}