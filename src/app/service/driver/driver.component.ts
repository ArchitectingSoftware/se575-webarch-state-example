import { Component, OnInit } from '@angular/core';
import { DrivingService } from '../driving.service'

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {

  driver: string;

  constructor(private drivingService: DrivingService) { }

  ngOnInit() {
    this.drivingService.currentMessage.subscribe(message => this.driver = message)
  }

  setDriverName(){
    this.drivingService.driverName = this.driver
  }

}
