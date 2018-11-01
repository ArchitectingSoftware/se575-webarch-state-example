import { Component, OnInit } from '@angular/core';
import { DrivingService } from '../driving.service'

@Component({
  selector: 'app-garage',
  templateUrl: './garage.component.html',
  styleUrls: ['./garage.component.css']
})
export class GarageComponent implements OnInit {

  driver: string;

  constructor(private drivingService: DrivingService) { }

  ngOnInit() {
  }

  setDriverName(){
      this.drivingService.publishMessage(this.driver);
  }

}
