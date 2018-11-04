import { Component, OnInit } from '@angular/core';
import { DrivingService } from '../driving.service'

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  driverName: string = "NOT KNOWN";

  constructor(private  drivingService: DrivingService) {
    
   }


  ngOnInit() {
    this.drivingService.currentMessage.subscribe(message => this.driverName = message)
    this.driverName = "foo"
  }

  getDriverName(){
    return this.driverName = this.drivingService.driverName;
  }

  publishDriverName(){
    this.drivingService.driverName = this.driverName
  }

}
